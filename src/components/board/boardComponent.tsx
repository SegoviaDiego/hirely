import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import {
  DragDropContext,
  DraggableLocation,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';

import BoardColumn, { BoardColumnData } from '@/components/board/boardColumn';
import reorder from '@/utils/ReorderArray';

import { Candidate } from './boardCard';

const updateColumns = (
  columns: BoardColumnData[],
  source: DraggableLocation,
  destination: DraggableLocation
) => {
  let current = [...columns[source.droppableId as any]!.candidates];
  const next = [...columns[destination.droppableId as any]!.candidates];
  const candidate = current[source.index]!;

  if (source.droppableId === destination.droppableId) {
    // moving to same column

    current = reorder([...current], source.index, destination.index);
  } else {
    // moving to different list

    // remove from original
    current.splice(source.index, 1);
    // insert into next
    next.splice(destination.index, 0, candidate);
  }

  return Object.values({
    ...columns,
    [destination.droppableId]: {
      ...columns[destination.droppableId as any]!,
      candidates: next,
    },
    [source.droppableId]: {
      ...columns[source.droppableId as any]!,
      candidates: current,
    },
  });
};

interface IBoardComponentProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  setSelectedProfile: Dispatch<SetStateAction<Candidate>>;
  candidates: any;
}

const BoardComponent = (props: IBoardComponentProps) => {
  const { setOpen, setSelectedProfile, candidates } = props;
  // TODO: This should come from the database.
  const [columns, setColumns] = useState(candidates);

  const [winReady, setwinReady] = useState(false);

  useEffect(() => {
    setwinReady(true);
  }, []);

  const onDragEnd = (result: DropResult) => {
    // we don't combine candidates
    if (result.combine) return;

    // dropped nowhere
    if (!result.destination) return;

    const { source } = result;
    const { destination } = result;

    // did not move anywhere
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    const updatedColumns: any = updateColumns(columns, source, destination);

    setColumns(updatedColumns);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="align-center flex h-full w-full justify-center">
        {winReady &&
          columns &&
          columns.map((column, index) => (
            <Droppable
              key={`candidate-column-${index}`}
              droppableId={`${index}`}
            >
              {(provided) => (
                <BoardColumn
                  draggableProvided={provided}
                  column={column}
                  setOpen={setOpen}
                  setSelectedProfile={setSelectedProfile}
                />
              )}
            </Droppable>
          ))}
      </div>
    </DragDropContext>
  );
};

export default BoardComponent;
