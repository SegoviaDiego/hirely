import { ReactNode } from 'react';

type MainContainerProps = {
  children: ReactNode;
};

const MainContainer = ({ children }: MainContainerProps) => {
  return (
    <main className="h-full w-full flex-1">
      <div className="h-full w-full py-6">
        <div className="mx-auto h-full w-full max-w-7xl">{children}</div>
      </div>
    </main>
  );
};

export { MainContainer };
