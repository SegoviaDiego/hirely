import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const Candidates = () => {
  // @TODO: Redirect to sign-in or base path for authenticated users.

  return (
    <Main meta={<Meta title="Hirely" description="Your hiring buddy." />}>
      <h1 className="text-2xl font-bold">Candidates</h1>
    </Main>
  );
};

export default Candidates;
