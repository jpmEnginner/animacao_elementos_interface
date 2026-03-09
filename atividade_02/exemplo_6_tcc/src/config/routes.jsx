import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    Navigate,
} from 'react-router-dom';

import Layout from '../components/Layout/Layout';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import AdminDashboard from '../pages/DashboardAdmin/DashboardAdm';
import DenunciasPage from '../pages/Denuncias/DenunciasPlataforma';
import DenunciaDetails from '../pages/DenunciaDetails/DenunciaDetails';
import UserListPage from '../pages/UserListPage/UserListPage';
import ConstructionPage from '../pages/DashboardUserBuilding/DashboardUserBuilding';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<Layout />}>
                <Route path="/" element={<Navigate to="/login" replace />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* rotas protegidas */}
                <Route
                    path="/admin"
                    element={
                        <PrivateRoute>
                            <AdminDashboard />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/admin/denuncias"
                    element={
                        <PrivateRoute>
                            <DenunciasPage />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/admin/denuncias/:id"
                    element={
                        <PrivateRoute>
                            <DenunciaDetails />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/admin/usuarios"
                    element={
                        <PrivateRoute>
                            <UserListPage />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/construcao"
                    element={
                        <PrivateRoute>
                            <ConstructionPage />
                        </PrivateRoute>
                    }
                />
            </Route>

            <Route path="*" element={<Navigate to="/login" replace />} />
        </>
    )
);

export default router;