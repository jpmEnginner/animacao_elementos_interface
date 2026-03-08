import { useNavigate } from 'react-router-dom';
import Denuncias from '../../components/Denuncias/Denuncias';

export default function DenunciasPage() {
  const navigate = useNavigate();
  return <Denuncias onBack={() => navigate(-1)} />;
}