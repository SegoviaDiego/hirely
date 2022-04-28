import { DesktopSidebar } from '@/layout/authenticated/DesktopSidebar';
import { MobileSidebar } from '@/layout/authenticated/MobileSidebar';

type SidebarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
  navigation: any[];
};

const Sidebar = ({ navigation, setSidebarOpen, sidebarOpen }: SidebarProps) => {
  return (
    <>
      <MobileSidebar
        navigation={navigation}
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
      />
      <DesktopSidebar navigation={navigation} />
    </>
  );
};

export { Sidebar };
