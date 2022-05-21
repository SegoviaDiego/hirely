import Image from 'next/image';
import Link from 'next/link';

import appLogo from '@/public/assets/images/logo.png';
import { classNames } from '@/utils/ClassNames';

type DesktopSidebarProps = {
  navigation: any[];
  currentNav: string;
};

const DesktopSidebar = ({ navigation, currentNav }: DesktopSidebarProps) => {
  return (
    <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
      <div className="flex grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5">
        <div className="flex items-center border-b-2 px-4 pb-5">
          <Link href="/">
            <a className="w-1/3">
              <Image src={appLogo} alt="Hirely" />
            </a>
          </Link>
        </div>
        <div className="mt-5 flex grow flex-col">
          <nav className="flex-1 space-y-1 px-2 pb-4">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <a
                  className={classNames(
                    item.href === currentNav
                      ? 'bg-indigo-100 text-gray-900'
                      : 'text-gray-600 hover:bg-indigo-50 hover:text-gray-900',
                    'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                  )}
                >
                  <item.icon
                    className={classNames(
                      item.href === currentNav
                        ? 'text-gray-500'
                        : 'text-gray-400 group-hover:text-gray-500',
                      'mr-3 flex-shrink-0 h-6 w-6'
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </a>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export { DesktopSidebar };
