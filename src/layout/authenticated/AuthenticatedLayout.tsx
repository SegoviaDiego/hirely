import { ReactNode, useState } from 'react';

import {
  ClipboardListIcon,
  CogIcon,
  UserGroupIcon,
  ViewGridIcon,
} from '@heroicons/react/outline';

import { MainContainer } from '@/layout/authenticated/MainContainer';
import { SearchBar } from '@/layout/authenticated/SearchBar';
import { Sidebar } from '@/layout/authenticated/Sidebar';

type AuthenticatedLayoutProps = {
  children: ReactNode;
};

const navigation = [
  { name: 'Inicio', href: '#', icon: ViewGridIcon, current: true },
  { name: 'Posiciones', href: '#', icon: ClipboardListIcon, current: false },
  { name: 'Candidatxs', href: '#', icon: UserGroupIcon, current: false },
  { name: 'Configuración', href: '#', icon: CogIcon, current: false },
];

const userNavigation = [{ name: 'Cerrar Sesión', href: '/auth/sign-out' }];

const AuthenticatedLayout = ({ children }: AuthenticatedLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <Sidebar
        navigation={navigation}
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
      />
      <div className="flex flex-1 flex-col md:pl-64">
        <SearchBar
          setSidebarOpen={setSidebarOpen}
          userNavigation={userNavigation}
        />
        <MainContainer>{children}</MainContainer>
      </div>
    </div>
  );
};

export { AuthenticatedLayout };
