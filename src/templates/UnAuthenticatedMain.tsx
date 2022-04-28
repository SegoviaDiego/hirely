import { ReactNode } from 'react';

import { UnAuthenticatedLayout } from '@/layout/unauthenticated/UnAuthenticatedLayout';

type UnAuthenticatedMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const UnAuthenticatedMain = ({ meta, children }: UnAuthenticatedMainProps) => (
  <>
    {meta}
    <UnAuthenticatedLayout>{children}</UnAuthenticatedLayout>
  </>
);

export { UnAuthenticatedMain };
