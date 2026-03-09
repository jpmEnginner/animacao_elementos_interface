import { RouterProvider } from 'react-router-dom';
import router from './config/routes';
import { AuthProvider } from './contexts/AuthProvider';
import { SidebarProvider } from './contexts/SidebarContext';

function App() {
  return (
    <AuthProvider>
      <SidebarProvider>
        <RouterProvider router={router} />
      </SidebarProvider>
    </AuthProvider>
  );
}

export default App;     