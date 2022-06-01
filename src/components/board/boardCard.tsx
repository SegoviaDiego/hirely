import { DraggableProvided } from 'react-beautiful-dnd';

export type BoardCardProps = {
  candidate: Candidate;
  draggableProvided: DraggableProvided;
};

export type Candidate = {
  id: number;
  fullName: string;
  match: number;
  role: string;
  profileImageURL: string;
};

const BoardCard = ({ draggableProvided, candidate }: BoardCardProps) => {
  return (
    <div
      ref={draggableProvided.innerRef}
      {...draggableProvided.draggableProps}
      {...draggableProvided.dragHandleProps}
      className="mb-5 w-full overflow-hidden rounded-xl bg-white p-5"
    >
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="sm:flex sm:space-x-5">
          <div className="text-center sm:mt-0 sm:pt-1 sm:text-left">
            <div className="w-24 rounded-md bg-amber-300 text-center text-sm text-amber-700">
              ${candidate.match}% match
            </div>
            <p className="text-xl font-bold text-gray-900 sm:text-2xl">
              {candidate.fullName}
            </p>
            <p className="text-sm font-medium text-gray-600">
              {candidate.role}
            </p>
          </div>
        </div>
        <div className="">
          <img
            className="mx-auto h-20 w-20 rounded-full"
            src={candidate.profileImageURL}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default BoardCard;
