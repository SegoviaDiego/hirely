import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const Configuration = () => {
  // @TODO: Redirect to sign-in or base path for authenticated users.

  return (
    <Main meta={<Meta title="Hirely" description="Your hiring buddy." />}>
      <h1>Configuration</h1>
    </Main>
  );
};

export default Configuration;
