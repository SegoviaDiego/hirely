import { Draggable, DroppableProvided } from 'react-beautiful-dnd';

import BoardCard, { Candidate } from '@/components/board/boardCard';

export type BoardColumnProps = {
  column: BoardColumnData;
  draggableProvided: DroppableProvided;
};

export type BoardColumnData = {
  title: string;
  color: string;
  candidates: Candidate[];
};

const BoardColumn = ({ draggableProvided, column }: BoardColumnProps) => {
  return (
    <div className="mx-2 h-full flex-1 overflow-hidden rounded-t-xl bg-zinc-100 p-5">
      <div className="flex h-8 w-full flex-row items-center">
        <div className="mr-2 h-2 w-2 rounded-full bg-indigo-500" />
        <h3 className="text-md mr-2 font-bold text-gray-900 sm:truncate">
          {column.title}
        </h3>
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-500 text-xs">
          {column.candidates.length}
        </div>
      </div>
      <div className="mb-5 h-1 w-full bg-indigo-700"></div>
      <div
        ref={draggableProvided.innerRef}
        {...draggableProvided.droppableProps}
        className="flex flex-col justify-center"
      >
        {column.candidates.map((candidate, index) => (
          <Draggable
            key={`candidate-${candidate.id}`}
            draggableId={`candidate-${candidate.id}`}
            index={index}
          >
            {(provided) => (
              <BoardCard draggableProvided={provided} candidate={candidate} />
            )}
          </Draggable>
        ))}
      </div>
    </div>
  );
};

export default BoardColumn;
