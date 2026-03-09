import { useNavigate } from 'react-router-dom';
import UserList from '../../components/UserList/UserList';

export default function UserListPage() {
  const navigate = useNavigate();
  return <UserList onBack={() => navigate(-1)} />;
}