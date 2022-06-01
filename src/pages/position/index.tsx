import Link from 'next/link';

import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  // @TODO: Redirect to sign-in or base path for authenticated users.

  return (
    <Main meta={<Meta title="Hirely" description="Your hiring buddy." />}>
      <h1 className="text-2xl font-bold">Listado de positions...</h1>
      <Link href="/position/1">
        <a>go to detail</a>
      </Link>
    </Main>
  );
};

export default Index;
