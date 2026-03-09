import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../../utils/axios-client';
import '../../styles/index.css';

function Register() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    senha_confirmation: '', // ✅ Necessário para validação no backend
    idade: '',
    sexo: '',
    telefone: '',
    data_nascimento: '',
    cpf: '',
    endereco: '',
    nacionalidade: '',
    tipo_usuario: '',
    // Campos condicionais para MOTORISTA
    cnh: '',
    validade_cnh: '',
    categoria_cnh: '',
    foto_cnh: '',
    // Campo condicional para PASSAGEIRO
    apelido: '',
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
    // Limpa erro do campo ao digitar
    if (errors[id]) {
      setErrors({ ...errors, [id]: null });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    try {
      // ✅ Monta payload para o backend
      const payload = {
        nome: formData.nome,
        email: formData.email,
        senha: formData.senha,
        senha_confirmation: formData.senha_confirmation,
        idade: parseInt(formData.idade),
        sexo: formData.sexo,
        telefone: formData.telefone,
        data_nascimento: formData.data_nascimento,
        cpf: formData.cpf,
        endereco: formData.endereco,
        nacionalidade: formData.nacionalidade,
        tipo_usuario: formData.tipo_usuario,
        status_conta: 'ATIVO', // ou 'PENDENTE' se precisar de aprovação
      };

      // ✅ Campos condicionais baseados no tipo
      if (formData.tipo_usuario === 'MOTORISTA') {
        payload.cnh = formData.cnh;
        payload.validade_cnh = formData.validade_cnh;
        payload.categoria_cnh = formData.categoria_cnh;
        payload.foto_cnh = formData.foto_cnh || 'default.jpg'; // temporário
      }

      if (formData.tipo_usuario === 'PASSAGEIRO') {
        payload.apelido = formData.apelido;
      }

      // ✅ Envia para o backend
      const res = await api.post('/usuarios', payload);

      alert('Cadastro realizado com sucesso!');
      navigate('/login', { replace: true });

    } catch (err) {
      console.error('Erro ao cadastrar:', err);

      // ✅ Trata erros de validação do Laravel
      if (err.response?.status === 422 && err.response?.data?.errors) {
        setErrors(err.response.data.errors);
      } else {
        alert(err.response?.data?.message || 'Erro ao cadastrar. Tente novamente.');
      }
    } finally {
      setLoading(false);
    }
  };

  // ✅ Helper para mostrar erros de campo
  const getFieldError = (field) => {
    if (errors[field] && Array.isArray(errors[field])) {
      return errors[field][0];
    }
    return null;
  };

  return (
    <main className="main">
      <div className="signup-container">
        <div className="signup-form-wrapper">

          <div className="form-logo">
            <img src="/assets/img/icone_vdc_meio.png" alt="VaiDeCarona" className="form-logo-image" />
          </div>

          <h1 className="signup-title">Criar Conta</h1>

          <form className="signup-form" onSubmit={handleSubmit}>
            
            {/* Nome e Email */}
            <div className="form-row">
              <div className="input-group">
                <input 
                  type="text" 
                  className={`form-input ${getFieldError('nome') ? 'input-error' : ''}`}
                  id="nome" 
                  placeholder="Nome Completo"
                  value={formData.nome}
                  onChange={handleChange}
                  disabled={loading}
                  required 
                />
                {getFieldError('nome') && <span className="error-text">{getFieldError('nome')}</span>}
              </div>

              <div className="input-group">
                <input 
                  type="email" 
                  className={`form-input ${getFieldError('email') ? 'input-error' : ''}`}
                  id="email" 
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={loading}
                  required 
                />
                {getFieldError('email') && <span className="error-text">{getFieldError('email')}</span>}
              </div>
            </div>

            {/* Senha e Confirmação */}
            <div className="form-row">
              <div className="input-group">
                <input 
                  type="password" 
                  className={`form-input ${getFieldError('senha') ? 'input-error' : ''}`}
                  id="senha" 
                  placeholder="Senha (mín. 6 caracteres)"
                  value={formData.senha}
                  onChange={handleChange}
                  disabled={loading}
                  minLength="6"
                  required 
                />
                {getFieldError('senha') && <span className="error-text">{getFieldError('senha')}</span>}
              </div>

              <div className="input-group">
                <input 
                  type="password" 
                  className="form-input"
                  id="senha_confirmation" 
                  placeholder="Confirmar Senha"
                  value={formData.senha_confirmation}
                  onChange={handleChange}
                  disabled={loading}
                  required 
                />
              </div>
            </div>

            {/* Idade e Sexo */}
            <div className="form-row">
              <div className="input-group">
                <input 
                  type="number" 
                  className="form-input"
                  id="idade" 
                  placeholder="Idade" 
                  min="18" 
                  max="100"
                  value={formData.idade}
                  onChange={handleChange}
                  disabled={loading}
                  required 
                />
              </div>

              <div className="input-group">
                <select 
                  className="form-input form-select"
                  id="sexo"
                  value={formData.sexo}
                  onChange={handleChange}
                  disabled={loading}
                  required
                >
                  <option value="">Selecione o Sexo</option>
                  <option value="M">Masculino</option>
                  <option value="F">Feminino</option>
                  <option value="O">Outro</option>
                  <option value="N">Prefiro não informar</option>
                </select>
              </div>
            </div>

            {/* Telefone e Data de Nascimento */}
            <div className="form-row">
              <div className="input-group">
                <input 
                  type="tel" 
                  className={`form-input ${getFieldError('telefone') ? 'input-error' : ''}`}
                  id="telefone" 
                  placeholder="Telefone (com DDD)"
                  value={formData.telefone}
                  onChange={handleChange}
                  disabled={loading}
                  required 
                />
                {getFieldError('telefone') && <span className="error-text">{getFieldError('telefone')}</span>}
              </div>

              <div className="input-group">
                <input 
                  type="date" 
                  className="form-input"
                  id="data_nascimento"
                  value={formData.data_nascimento}
                  onChange={handleChange}
                  disabled={loading}
                  required 
                />
              </div>
            </div>

            {/* CPF e Nacionalidade */}
            <div className="form-row">
              <div className="input-group">
                <input 
                  type="text" 
                  className={`form-input ${getFieldError('cpf') ? 'input-error' : ''}`}
                  id="cpf" 
                  placeholder="CPF (000.000.000-00)" 
                  maxLength="14"
                  value={formData.cpf}
                  onChange={handleChange}
                  disabled={loading}
                  required 
                />
                {getFieldError('cpf') && <span className="error-text">{getFieldError('cpf')}</span>}
              </div>

              <div className="input-group">
                <select 
                  className="form-input form-select"
                  id="nacionalidade"
                  value={formData.nacionalidade}
                  onChange={handleChange}
                  disabled={loading}
                  required
                >
                  <option value="">Nacionalidade</option>
                  <option value="Brasileira">Brasileira</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Paraguaia">Paraguaia</option>
                  <option value="Uruguaia">Uruguaia</option>
                  <option value="Outra">Outra</option>
                </select>
              </div>
            </div>

            {/* Endereço */}
            <div className="form-row">
              <div className="input-group input-group--full">
                <input 
                  type="text" 
                  className="form-input"
                  id="endereco" 
                  placeholder="Endereço Completo"
                  value={formData.endereco}
                  onChange={handleChange}
                  disabled={loading}
                  required 
                />
              </div>
            </div>

            {/* Tipo de Usuário */}
            <div className="form-row">
              <div className="input-group">
                <select 
                  className="form-input form-select"
                  id="tipo_usuario"
                  value={formData.tipo_usuario}
                  onChange={handleChange}
                  disabled={loading}
                  required
                >
                  <option value="">Tipo de usuário</option>
                  <option value="PASSAGEIRO">Passageiro</option>
                  <option value="MOTORISTA">Motorista</option>
                </select>
              </div>
            </div>

            {/* ✅ CAMPOS CONDICIONAIS - PASSAGEIRO */}
            {formData.tipo_usuario === 'PASSAGEIRO' && (
              <div className="form-row">
                <div className="input-group input-group--full">
                  <input 
                    type="text" 
                    className={`form-input ${getFieldError('apelido') ? 'input-error' : ''}`}
                    id="apelido" 
                    placeholder="Apelido / Nome de Preferência"
                    value={formData.apelido}
                    onChange={handleChange}
                    disabled={loading}
                    required 
                  />
                  {getFieldError('apelido') && <span className="error-text">{getFieldError('apelido')}</span>}
                </div>
              </div>
            )}

            {/* ✅ CAMPOS CONDICIONAIS - MOTORISTA */}
            {formData.tipo_usuario === 'MOTORISTA' && (
              <>
                <div className="form-row">
                  <div className="input-group">
                    <input 
                      type="text" 
                      className={`form-input ${getFieldError('cnh') ? 'input-error' : ''}`}
                      id="cnh" 
                      placeholder="Número da CNH"
                      value={formData.cnh}
                      onChange={handleChange}
                      disabled={loading}
                      required 
                    />
                    {getFieldError('cnh') && <span className="error-text">{getFieldError('cnh')}</span>}
                  </div>

                  <div className="input-group">
                    <input 
                      type="date" 
                      className={`form-input ${getFieldError('validade_cnh') ? 'input-error' : ''}`}
                      id="validade_cnh"
                      placeholder="Validade da CNH"
                      value={formData.validade_cnh}
                      onChange={handleChange}
                      disabled={loading}
                      required 
                    />
                    {getFieldError('validade_cnh') && <span className="error-text">{getFieldError('validade_cnh')}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="input-group">
                    <select 
                      className={`form-input form-select ${getFieldError('categoria_cnh') ? 'input-error' : ''}`}
                      id="categoria_cnh"
                      value={formData.categoria_cnh}
                      onChange={handleChange}
                      disabled={loading}
                      required
                    >
                      <option value="">Categoria da CNH</option>
                      <option value="A">A (Moto)</option>
                      <option value="B">B (Carro)</option>
                      <option value="C">C (Caminhão)</option>
                      <option value="D">D (Ônibus)</option>
                      <option value="E">E (Carreta)</option>
                    </select>
                    {getFieldError('categoria_cnh') && <span className="error-text">{getFieldError('categoria_cnh')}</span>}
                  </div>
                </div>
              </>
            )}

            <button type="submit" className="btn btn--primary" disabled={loading}>
              {loading ? 'Cadastrando...' : 'Cadastrar'}
            </button>
          </form>

          <div className="login-link">
            <p className="login-text">
              Já tem uma conta?
              <Link to="/login" className="login-link-text">Faça login</Link>
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}

export default Register;