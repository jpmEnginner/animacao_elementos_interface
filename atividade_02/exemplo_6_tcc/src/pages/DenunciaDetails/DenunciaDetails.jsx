import { useNavigate, useParams } from 'react-router-dom';
import DenunciaDetails from '../../components/Denuncias/DenunciaDetails/DenunciaDetails';

export default function DenunciaDetailsPage() {
  const navigate = useNavigate();
  const { id } = useParams(); // se quiser buscar na API por ID

  return <DenunciaDetails onBack={() => navigate(-1)} denunciaId={id} />;
}