import { ReactNode, useState } from 'react';

import { HomeIcon } from '@heroicons/react/outline';

import { MainContainer } from '@/layout/authenticated/MainContainer';
import { SearchBar } from '@/layout/authenticated/SearchBar';
import { Sidebar } from '@/layout/authenticated/Sidebar';

type AuthenticatedLayoutProps = {
  children: ReactNode;
};

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  { name: 'Team', href: '#', icon: HomeIcon, current: false },
  { name: 'Projects', href: '#', icon: HomeIcon, current: false },
  { name: 'Calendar', href: '#', icon: HomeIcon, current: false },
  { name: 'Documents', href: '#', icon: HomeIcon, current: false },
  { name: 'Reports', href: '#', icon: HomeIcon, current: false },
];

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

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
