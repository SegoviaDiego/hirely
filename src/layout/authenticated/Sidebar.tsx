import { DesktopSidebar } from '@/layout/authenticated/DesktopSidebar';
import { MobileSidebar } from '@/layout/authenticated/MobileSidebar';

type SidebarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
  navigation: any[];
  currentNav: string;
};

const Sidebar = ({
  navigation,
  setSidebarOpen,
  sidebarOpen,
  currentNav,
}: SidebarProps) => {
  return (
    <>
      <MobileSidebar
        navigation={navigation}
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
      />
      <DesktopSidebar navigation={navigation} currentNav={currentNav} />
    </>
  );
};

export { Sidebar };
