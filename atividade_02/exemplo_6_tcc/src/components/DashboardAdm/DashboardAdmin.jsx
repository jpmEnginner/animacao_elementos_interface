import { useEffect, useState, useMemo } from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import api from '../../utils/axios-client';

import * as S from './DashboardAdmin.styles';

function DashboardAdmin() {
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  const fetchDashboardData = async () => {
    try {
      const res = await api.get('/dashboard');
      const data = res.data.data ?? res.data;
      setMetrics(data);
      setError(null);
    } catch (err) {
      console.error('Erro ao carregar dashboard:', err);
      setError('Erro ao carregar métricas');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();

    const interval = setInterval(fetchDashboardData, 300000);
    
    return () => clearInterval(interval);
  }, []);


  const chartData = useMemo(() => {
    if (!metrics?.usage) {
      return {
        labels: [
          'Usuários Ativos',
          'Viagens Realizadas',
          'Denúncias Resolvidas',
          'Novos Cadastros',
          'Cancelamentos',
          'Outros',
        ],
        datasets: [{
          data: [0, 0, 0, 0, 0, 0],
          backgroundColor: [
            '#007bff', '#28a745', '#17a2b8',
            '#ffc107', '#dc3545', '#6c757d',
          ],
          borderColor: '#fff',
          borderWidth: 3,
          hoverBorderWidth: 4,
          hoverBackgroundColor: [
            '#0056b3', '#1e7e34', '#117a8b',
            '#d39e00', '#c82333', '#545b62',
          ],
        }],
      };
    }

    const usage = metrics.usage;
    return {
      labels: [
        'Usuários Ativos',
        'Viagens Realizadas',
        'Denúncias Resolvidas',
        'Novos Cadastros',
        'Cancelamentos',
        'Outros',
      ],
      datasets: [{
        label: 'Distribuição da Plataforma',
        data: [
          usage.usuarios_ativos || 0,
          usage.viagens_realizadas || 0,
          usage.denuncias_resolvidas || 0,
          usage.novos_cadastros || 0,
          usage.cancelamentos || 0,
          usage.outros || 0,
        ],
        backgroundColor: [
          '#007bff', // Azul - Usuários Ativos
          '#28a745', // Verde - Viagens
          '#17a2b8', // Azul claro - Denúncias
          '#ffc107', // Amarelo - Novos Cadastros
          '#dc3545', // Vermelho - Cancelamentos
          '#6c757d', // Cinza - Outros
        ],
        borderColor: '#fff',
        borderWidth: 3,
        hoverBorderWidth: 4,
        hoverBackgroundColor: [
          '#0056b3',
          '#1e7e34',
          '#117a8b',
          '#d39e00',
          '#c82333',
          '#545b62',
        ],
      }],
    };
  }, [metrics]);

  const chartOptions = useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,
    cutout: '60%',
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          padding: 16,
          boxWidth: 12,
          font: {
            size: 14,
            weight: '500',
          },
          color: '#6c757d',
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: '#007bff',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: true,
        padding: 12,
        callbacks: {
          label: function(context) {
            return `${context.label}: ${context.parsed}`;
          },
        },
      },
    },
    hover: {
      animationDuration: 200,
    },
    animation: {
      animateRotate: true,
      duration: 1000,
    },
  }), []);


  const metricValue = metrics?.metricas?.uso_plataforma || 0;
  const changeText = metrics?.mudancas?.uso_mudanca || '+0%';
  const metricChange = parseFloat(changeText.replace('%', ''));


  if (loading) {
    return (
      <S.Main>
        <S.Container>
          <S.Title>Painel de Controle</S.Title>
          <p>Carregando métricas...</p>
        </S.Container>
      </S.Main>
    );
  }


  if (error) {
    return (
      <S.Main>
        <S.Container>
          <S.Title>Painel de Controle</S.Title>
          <p style={{ color: 'red' }}>{error}</p>
          <button onClick={fetchDashboardData}>Tentar novamente</button>
        </S.Container>
      </S.Main>
    );
  }

  return (
    <S.Main>
      <S.Container>
        <S.Title>Painel de Controle</S.Title>

        {/* Métrica principal */}
        <S.MetricCard>
          <S.MetricLabel>Uso da Plataforma</S.MetricLabel>
          <S.MetricValue>{metricValue.toLocaleString('pt-BR')}</S.MetricValue>
          <S.MetricChange positive={metricChange >= 0}>
            Últimos 30 Dias&nbsp;{changeText}
          </S.MetricChange>
        </S.MetricCard>

        {/* Gráfico donut */}
        <S.ChartCard>
          <S.ChartWrapper>
            <Doughnut data={chartData} options={chartOptions} />
          </S.ChartWrapper>
        </S.ChartCard>

        {/* Botões de atalho */}
        <S.ActionButtons>
          <S.ActionBtnPrimary as={Link} to="/admin/denuncias">
            Gerenciar<br />Denúncias
          </S.ActionBtnPrimary>

          <S.ActionBtnSecondary as={Link} to="/admin/usuarios">
            Gerenciar<br />Usuários
          </S.ActionBtnSecondary>
        </S.ActionButtons>
      </S.Container>
    </S.Main>
  );
}

export default DashboardAdmin;