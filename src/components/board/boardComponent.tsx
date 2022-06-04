import { useEffect, useState } from 'react';

import {
  DragDropContext,
  DraggableLocation,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';

import BoardColumn, { BoardColumnData } from '@/components/board/boardColumn';
import reorder from '@/utils/ReorderArray';

// TODO: Should come from backend.
const mockColumns: BoardColumnData[] = [
  {
    title: 'CVs por revisar',
    color: '#000',
    candidates: [
      {
        id: 1,
        fullName: 'Bruce Wayne',
        match: 63,
        role: 'Frontend Developer',
        profileImageURL:
          'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/fBEucxECxGLKVHBznO0qHtCGiMO.jpg',
        education: 'UBA, Ciencias de datos',
        experience: '2 años de experiencia',
        salary: 120000,
        seniority: 'senior',
      },
      {
        id: 2,
        fullName: 'Bruce Wayne',
        match: 63,
        role: 'Frontend Developer',
        profileImageURL:
          'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/kq5DDnqqofoRI0t6ddtRlsJnNPT.jpg',
        education: 'UBA, Ciencias de datos',
        experience: '2 años de experiencia',
        salary: 120000,
        seniority: 'senior',
      },
      {
        id: 3,
        fullName: 'Bruce Wayne',
        match: 63,
        role: 'Frontend Developer',
        profileImageURL:
          'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/2RVyvc8YVqtfN0taqpYliaUoBem.jpg',
        education: 'UBA, Ciencias de datos',
        experience: '2 años de experiencia',
        salary: 120000,
        seniority: 'senior',
      },
    ],
  },
  {
    title: 'En evaluación',
    color: '#000',
    candidates: [
      {
        id: 4,
        fullName: 'Bruce Wayne',
        match: 63,
        role: 'Frontend Developer',
        profileImageURL:
          'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/ukmfsl59Isvn9odgzMWBidA3cmt.jpg',
        education: 'UBA, Ciencias de datos',
        experience: '2 años de experiencia',
        salary: 120000,
        seniority: 'senior',
      },
    ],
  },
  {
    title: 'Contratadxs',
    color: '#000',
    candidates: [
      {
        id: 5,
        fullName: 'Bruce Wayne',
        match: 63,
        role: 'Frontend Developer',
        profileImageURL:
          'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/ntwPvV4GKGGHO3I7LcHMwhXfsw9.jpg',
        education: 'UBA, Ciencias de datos',
        experience: '2 años de experiencia',
        salary: 120000,
        seniority: 'senior',
      },
    ],
  },
];

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

const BoardComponent = () => {
  // TODO: This should come from the database.
  const [columns, setColumns] = useState(mockColumns);

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
          columns.map((column, index) => (
            <Droppable
              key={`candidate-column-${index}`}
              droppableId={`${index}`}
            >
              {(provided) => (
                <BoardColumn draggableProvided={provided} column={column} />
              )}
            </Droppable>
          ))}
      </div>
    </DragDropContext>
  );
};

export default BoardComponent;