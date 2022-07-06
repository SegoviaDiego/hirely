import { useState } from 'react';

import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

import { Candidate } from '@/components/board/boardCard';
import BoardComponent from '@/components/board/boardComponent';
import { ProfileDrawerComponent } from '@/components/board/profileDrawerComponent';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const Board = () => {
  const router = useRouter();
  const { id } = router.query;

  const [openProfile, setOpenProfile] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<Candidate | null>(
    null
  );

  const { isLoading: isJobPostingLoading, data: jobPosting } = useQuery('job-posting-detail', async () => {
    const res = await fetch(`/api/jobPosting/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET'
    })
    return await res.json();
  },
    {
      enabled: !!id,
    }
  ) as any;
  console.log(jobPosting)

  const { isLoading: recommendationsLoading, data: recommendations } = useQuery('board-recommendations', async () =>{
    const res = await fetch(`/api/recommendation/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET'
    })
    return await res.json();
  },
    {
      enabled: !!id,
    }
  ) as any;

  console.log(recommendations)

  return (
    <Main meta={<Meta title="Hirely" description="Your hiring buddy." />}>
      {isJobPostingLoading && <div>Loading...</div>}
      {!isJobPostingLoading && (
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
