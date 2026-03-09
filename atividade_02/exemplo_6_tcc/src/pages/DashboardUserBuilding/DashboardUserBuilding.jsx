import { useNavigate } from 'react-router-dom';
import Construction from '../../components/DashboardUserBuilding/DashboardUserBuilding';

export default function ConstructionPage() {
  const navigate = useNavigate();
  return <Construction onExit={() => navigate('/')} />;
}