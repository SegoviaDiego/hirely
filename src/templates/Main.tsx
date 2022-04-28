import { ReactNode } from 'react';

import { AuthenticatedLayout } from '@/layout/authenticated/AuthenticatedLayout';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = ({ meta, children }: IMainProps) => (
  <>
    {meta}
    <AuthenticatedLayout>{children}</AuthenticatedLayout>
  </>
);

export { Main };
