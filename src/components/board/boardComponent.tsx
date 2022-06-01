import { useEffect, useState } from 'react';

import {
  DragDropContext,
  DraggableLocation,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';

import BoardColumn, { BoardColumnData } from '@/components/board/boardColumn';
import reorder from '@/utils/ReorderArray';

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
          'https://as01.epimg.net/meristation/imagenes/2021/10/06/noticias/1633514535_199538_1633514571_noticia_normal.jpg',
      },
      {
        id: 2,
        fullName: 'Bruce Wayne',
        match: 63,
        role: 'Frontend Developer',
        profileImageURL:
          'https://as01.epimg.net/meristation/imagenes/2021/10/06/noticias/1633514535_199538_1633514571_noticia_normal.jpg',
      },
      {
        id: 3,
        fullName: 'Bruce Wayne',
        match: 63,
        role: 'Frontend Developer',
        profileImageURL:
          'https://as01.epimg.net/meristation/imagenes/2021/10/06/noticias/1633514535_199538_1633514571_noticia_normal.jpg',
      },
    ],
  },
  {
    title: 'CVs por revisar',
    color: '#000',
    candidates: [
      {
        id: 4,
        fullName: 'Bruce Wayne',
        match: 63,
        role: 'Frontend Developer',
        profileImageURL:
          'https://as01.epimg.net/meristation/imagenes/2021/10/06/noticias/1633514535_199538_1633514571_noticia_normal.jpg',
      },
    ],
  },
  {
    title: 'CVs por revisar',
    color: '#000',
    candidates: [
      {
        id: 5,
        fullName: 'Bruce Wayne',
        match: 63,
        role: 'Frontend Developer',
        profileImageURL:
          'https://as01.epimg.net/meristation/imagenes/2021/10/06/noticias/1633514535_199538_1633514571_noticia_normal.jpg',
      },
    ],
  },
];

const updateColumns = (
  columns: BoardColumnData[],
  source: DraggableLocation,
  destination: DraggableLocation
) => {
  const current = { ...columns[source.droppableId as any] };
  const next = { ...columns[destination.droppableId as any] };
  const target = current.candidates[source.index];

  // moving to same column
  if (source.droppableId === destination.droppableId) {
    const reordered = reorder(current, source.index, destination.index);
    return {
      ...columns,
      [source.droppableId]: reordered,
    };
  }

  // moving to different list

  // remove from original
  current.splice(source.index, 1);
  // insert into next
  next.splice(destination.index, 0, target);

  return {
    ...columns,
    [source.droppableId]: current,
    [destination.droppableId]: next,
  };
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

    const updatedColumns = updateColumns(columns, source, destination);

    setColumns(updatedColumns);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="align-center flex h-full w-full justify-center">
        {winReady &&
          columns.map((column, index) => (
            <Droppable
              key={`candidate-column-${index}`}
              droppableId="job-board"
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
