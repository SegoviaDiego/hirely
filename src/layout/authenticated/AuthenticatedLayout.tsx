import { ReactNode, useState } from 'react';

import {
  ClipboardListIcon,
  CogIcon,
  UserGroupIcon,
  ViewGridIcon,
} from '@heroicons/react/outline';
import { useRouter } from 'next/router';

import { MainContainer } from '@/layout/authenticated/MainContainer';
import { SearchBar } from '@/layout/authenticated/SearchBar';
import { Sidebar } from '@/layout/authenticated/Sidebar';

type AuthenticatedLayoutProps = {
  children: ReactNode;
};

const navigation = [
  { id: 1, name: 'Inicio', href: '/', icon: ViewGridIcon, current: true },
  {
    id: 2,
    name: 'Posiciones',
    href: '/positions/',
    icon: ClipboardListIcon,
    current: false,
  },
  {
    id: 3,
    name: 'Candidatos',
    href: '/candidates/',
    icon: UserGroupIcon,
    current: false,
  },
  {
    id: 4,
    name: 'Configuración',
    href: '/configuration/',
    icon: CogIcon,
    current: false,
  },
];

const userNavigation = [{ name: 'Cerrar Sesión', href: '/auth/sign-out' }];

const AuthenticatedLayout = ({ children }: AuthenticatedLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="h-full w-full">
      <Sidebar
        navigation={navigation}
        currentNav={router.asPath}
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
      />
      <div className="flex h-full w-full flex-1 flex-col md:pl-64">
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
