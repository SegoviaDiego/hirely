import { Dispatch, SetStateAction } from 'react';

import {
  BriefcaseIcon,
  CashIcon,
  AcademicCapIcon,
} from '@heroicons/react/outline';
import { DraggableProvided } from 'react-beautiful-dnd';

export type BoardCardProps = {
  candidate: Candidate;
  draggableProvided: DraggableProvided;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setSelectedProfile: Dispatch<SetStateAction<Candidate>>;
};

export type Candidate = {
  id: number;
  fullName: string;
  match: number;
  matchE: number;
  matchDev: number;
  role: string;
  profileImageURL: string;
  education: string;
  experience: string;
  salary: number;
  seniority: string;
  gitHubURL: string;
  gitHubUser: string;
  currentPosition: string;
  currentCompany: string;
  matchDescription: string;
  matchType: number;
  matchRating: {
    technologies: MatchRating;
    salary: MatchRating;
    requirements: MatchRating;
    permanencia: MatchRating;
    benefits: MatchRating;
    experience: MatchRating;
  };
};

export type MatchRating = {
  color: number;
  rating: number;
};

const BoardCard = ({
  draggableProvided,
  candidate,
  setOpen,
  setSelectedProfile,
}: BoardCardProps) => {
  const handleCandidateProfile = () => {
    setOpen(true);
    setSelectedProfile(candidate);
  };
  return (
    <div
      ref={draggableProvided?.innerRef}
      {...draggableProvided?.draggableProps}
      {...draggableProvided?.dragHandleProps}
      className="mb-5 w-full overflow-hidden rounded-xl bg-white p-5"
    >
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="sm:flex sm:space-x-5">
          <div className="text-center sm:mt-0 sm:pt-1 sm:text-left">
            <div
              onClick={() => handleCandidateProfile()}
              className="w-24 cursor-pointer rounded-md bg-amber-300 text-center text-sm text-amber-700"
            >
              {candidate?.match}% match
            </div>
            <p className="text-xl font-bold text-gray-900 sm:text-2xl">
              {candidate?.fullName}
            </p>
            <p className="text-sm font-medium text-gray-600">
              {candidate?.role}
            </p>
          </div>
        </div>
        <div className="">
          <img
            className="mx-auto h-20 w-20 rounded-full"
            src={candidate?.profileImageURL}
            alt=""
          />
        </div>
      </div>
      <div className="flex w-full flex-col">
        <div className="flex flex-1 flex-row items-center py-1">
          <AcademicCapIcon className="h-5 w-5" aria-hidden="true" />
          <p className="ml-2">{candidate?.experience}</p>
        </div>
        <div className="flex flex-1 flex-row items-center py-1">
          <BriefcaseIcon className="h-5 w-5" aria-hidden="true" />
          <p className="ml-2">{candidate?.seniority}</p>
        </div>
        <div className="flex flex-1 flex-row items-center py-1">
          <CashIcon className="h-5 w-5" aria-hidden="true" />
          <p className="ml-2">{candidate?.education}</p>
        </div>
      </div>
    </div>
  );
};

export default BoardCard;
