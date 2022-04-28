import { ReactNode } from 'react';

type UnAuthenticatedLayoutProps = {
  children: ReactNode;
};

const UnAuthenticatedLayout = ({ children }: UnAuthenticatedLayoutProps) => {
  return (
    <div className="flex h-screen w-screen flex-col justify-center py-12 sm:px-6 lg:px-8">
      {children}
    </div>
  );
};

export { UnAuthenticatedLayout };
