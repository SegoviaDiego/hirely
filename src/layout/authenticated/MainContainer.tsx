import { ReactNode } from 'react';

type MainContainerProps = {
  children: ReactNode;
};

const MainContainer = ({ children }: MainContainerProps) => {
  return (
    <main className="flex-1">
      <div className="py-6">
        <div className="mx-auto max-w-7xl">{children}</div>
      </div>
    </main>
  );
};

export { MainContainer };
