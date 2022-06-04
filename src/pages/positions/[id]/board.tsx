import BoardComponent from '@/components/board/boardComponent';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const Board = () => {
  return (
    <Main meta={<Meta title="Hirely" description="Your hiring buddy." />}>
      <h2 className="mb-10 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl">
        Front End Developer
      </h2>
      <BoardComponent />
    </Main>
  );
};

export default Board;
