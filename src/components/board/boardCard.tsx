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

const getColor = (id: number) => {
  switch (id) {
    case 1:
      return 'text-green-600';
    case 2:
      return 'text-yellow-600';
    case 3:
      return 'text-red-600';
    default:
      return '';
  }
};

const getBgColor = (id: number) => {
  switch (id) {
    case 1:
      return 'bg-green-200';
    case 2:
      return 'bg-yellow-200';
    case 3:
      return 'bg-red-200';
    default:
      return '';
  }
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

  const getInitials = (name: string): string => {
    const nameArray = name.split(' ');

    return `${nameArray[0]?.[0] || ''}${nameArray[1]?.[0] || ''}`;
  };

  return (
    <div
      ref={draggableProvided?.innerRef}
      {...draggableProvided?.draggableProps}
      {...draggableProvided?.dragHandleProps}
      className="mb-5 w-full overflow-hidden rounded-xl bg-white p-5"
    >
      <div className="sm:flex sm:justify-between">
        <div className="sm:flex sm:space-x-5">
          <div className="text-center sm:mt-0 sm:pt-1 sm:text-left">
            <div
              onClick={() => handleCandidateProfile()}
              className={`w-24 cursor-pointer rounded-md text-center text-sm ${getColor(
                candidate.matchType
              )} ${getBgColor(candidate.matchType)}`}
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
          <div
            className={`rounded-full ${getBgColor(
              candidate.matchType
            )} h-16 w-16 flex justify-center items-center`}
          >
            <p
              className={`font-semibold ${getColor(
                candidate.matchType
              )} text-xl`}
            >{`${getInitials(candidate.fullName)}`}</p>
          </div>
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
