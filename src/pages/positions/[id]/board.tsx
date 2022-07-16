import { useState } from 'react';

import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

import { Candidate } from '@/components/board/boardCard';
import BoardComponent from '@/components/board/boardComponent';
import { ProfileDrawerComponent } from '@/components/board/profileDrawerComponent';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';
import { later } from '@/utils/later';
import { mockedBoards, mockedPositions } from '@/utils/mockedData';

const Board = () => {
  const router = useRouter();
  const { id } = router.query;

  const [openProfile, setOpenProfile] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<Candidate | null>(
    null
  );

  const { isLoading: isJobPostingLoading, data: jobPosting } = useQuery(
    'job-posting-detail',
    async () => {
      await later(1000);
      return mockedPositions[id as any];
    },
    {
      enabled: !!id,
    }
  ) as any;

  const { isLoading: recommendationsLoading, data: recommendations } = useQuery(
    'board-recommendations',
    async () => {
      await later(1000);
      return mockedBoards[id as any];
    },
    {
      enabled: !!id,
    }
  ) as any;

  return (
    <Main meta={<Meta title="Hirely" description="Your hiring buddy." />}>
      {isJobPostingLoading && !recommendationsLoading && <div>Loading...</div>}
      {!isJobPostingLoading && !recommendationsLoading && (
        <>
          <h2 className="mb-10 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl">
            {jobPosting?.title}
          </h2>
          <BoardComponent
            setOpen={setOpenProfile}
            setSelectedProfile={setSelectedProfile as any}
            candidates={recommendations}
          />
          <ProfileDrawerComponent
            open={openProfile}
            setOpen={setOpenProfile}
            selectedProfile={selectedProfile as any}
          />
        </>
      )}
    </Main>
  );
};

export default Board;
