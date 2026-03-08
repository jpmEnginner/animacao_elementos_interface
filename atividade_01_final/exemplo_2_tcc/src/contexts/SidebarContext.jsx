import { createContext, useContext } from 'react';
import { useSidebar } from '../hooks/useSidebar';

const SidebarContext = createContext();

export function SidebarProvider({ children }) {
  const sidebarData = useSidebar();

  
  return (
    <SidebarContext.Provider value={sidebarData}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebarContext() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebarContext deve ser usado dentro de SidebarProvider');
  }
  return context;
}