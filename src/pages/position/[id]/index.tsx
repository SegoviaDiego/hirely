import Link from 'next/link';

import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  // @TODO: Redirect to sign-in or base path for authenticated users.

  return (
    <Main meta={<Meta title="Hirely" description="Your hiring buddy." />}>
      <h1 className="text-2xl font-bold">Position detail</h1>
      <Link href="/position/1/board">
        <a>go to board</a>
      </Link>
    </Main>
  );
};

export default Index;
