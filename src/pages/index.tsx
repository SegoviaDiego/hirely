import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  // @TODO: Redirect to sign-in or base path for authenticated users.

  return (
    <Main meta={<Meta title="Hirely" description="Your hiring buddy." />}>
      <h1 className="text-2xl font-bold">Hirely, your hiring buddy</h1>
    </Main>
  );
};

export default Index;
