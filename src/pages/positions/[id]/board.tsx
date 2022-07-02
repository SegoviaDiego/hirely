import { useState } from 'react';

import { Candidate } from '@/components/board/boardCard';
import BoardComponent from '@/components/board/boardComponent';
import { ProfileDrawerComponent } from '@/components/board/profileDrawerComponent';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const Board = () => {
  const [openProfile, setOpenProfile] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<Candidate | null>(
    null
  );

  // Should hit to recommendations.
  // const { isLoading, data } = useQuery(
  //   'jobPostingBoard',
  //   () =>
  //     request({
  //       url: `/jobPosting/${id}`,
  //       method: 'GET',
  //     }),
  //   {
  //     enabled: !!id,
  //   }
  // );

  return (
    <Main meta={<Meta title="Hirely" description="Your hiring buddy." />}>
      <h2 className="mb-10 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl">
        Front End Developer
      </h2>
      <BoardComponent
        setOpen={setOpenProfile}
        setSelectedProfile={setSelectedProfile as any}
      />
      <ProfileDrawerComponent
        open={openProfile}
        setOpen={setOpenProfile}
        selectedProfile={selectedProfile as any}
      />
    </Main>
  );
};

export default Board;
