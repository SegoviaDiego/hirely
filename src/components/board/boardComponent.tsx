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

// TODO: Should come from backend.
const mockColumns: BoardColumnData[] = [
  {
    title: 'CVs por revisar',
    color: '#000',
    candidates: [
      {
        id: 1,
        fullName: 'Adolfo Martin',
        gitHubUser: '@AdolfoMartin',
        currentPosition: 'Sr. Frontend developer',
        currentCompany: 'Mercado Libre',
        matchDescription: 'Remuneración económica insuficiente',
        matchType: 3,
        gitHubURL: '',
        match: 55,
        matchE: 80,
        matchDev: 30,
        matchRating: {
          experience: {
            color: 1,
            rating: 100,
          },
          permanencia: {
            color: 2,
            rating: 50,
          },
          technologies: {
            color: 1,
            rating: 90,
          },
          salary: {
            color: 3,
            rating: 35,
          },
          requirements: {
            color: 3,
            rating: 40,
          },
          benefits: {
            color: 2,
            rating: 50,
          },
        },
        role: 'Frontend Developer',
        profileImageURL:
          'https://media-exp1.licdn.com/dms/image/C4E03AQGlhsSaeDOzLw/profile-displayphoto-shrink_200_200/0/1539708874075?e=1661385600&v=beta&t=9y9_VbndeB1otwj7aaBulHXlnjxaNqCQV3Q5gr0bW7k',
        education: 'Secundario',
        experience: '11 años de experiencia',
        salary: 360000,
        seniority: 'Senior',
      },
      {
        id: 3,
        fullName: 'Jimena Alba',
        gitHubUser: '@JimenaAlba',
        currentPosition: 'Junior Frontend dev',
        currentCompany: 'Freelance',
        matchDescription: 'Experiencia insuficiente',
        matchType: 2,
        gitHubURL: '',
        match: 63,
        matchE: 61,
        matchDev: 75,
        matchRating: {
          experience: {
            color: 3,
            rating: 40,
          },
          permanencia: {
            color: 1,
            rating: 80,
          },
          technologies: {
            color: 2,
            rating: 65,
          },
          salary: {
            color: 1,
            rating: 90,
          },
          requirements: {
            color: 1,
            rating: 70,
          },
          benefits: {
            color: 1,
            rating: 80,
          },
        },
        role: 'Frontend Developer',
        profileImageURL:
          'https://media-exp1.licdn.com/dms/image/C5103AQEPM7WEmj6DPw/profile-displayphoto-shrink_200_200/0/1517087465886?e=1661385600&v=beta&t=0tHK_Ize7VFEJcUP9-VbU5VYTtUNZ99tk6pZwTA0WW8',
        education: 'Secundario',
        experience: '2 años de experiencia',
        salary: 120000,
        seniority: 'Junior',
      },
    ],
  },
  {
    title: 'En evaluación',
    color: '#000',
    candidates: [
      {
        id: 2,
        fullName: 'Adrian Braga',
        gitHubUser: '@AdrianBraga',
        currentPosition: 'Semi Sr. Frontend dev',
        currentCompany: 'Accenture',
        matchDescription: 'Cumple con los requerimientos minimos',
        matchType: 1,
        gitHubURL: '',
        match: 82,
        matchE: 85,
        matchDev: 80,
        matchRating: {
          experience: {
            color: 1,
            rating: 90,
          },
          permanencia: {
            color: 2,
            rating: 55,
          },
          technologies: {
            color: 1,
            rating: 80,
          },
          salary: {
            color: 1,
            rating: 84,
          },
          requirements: {
            color: 1,
            rating: 81,
          },
          benefits: {
            color: 1,
            rating: 70,
          },
        },
        role: 'Frontend Developer',
        profileImageURL:
          'https://media-exp1.licdn.com/dms/image/C4E03AQHXxMCtw-PEbA/profile-displayphoto-shrink_200_200/0/1625934212299?e=1661385600&v=beta&t=I53reBWJJxc2eL78itb8cbdksWZaa2xOB-6WfKW_UWk',
        education: 'Universitario',
        experience: '5 años de experiencia',
        salary: 280000,
        seniority: 'SemiSenior',
      },
      {
        id: 4,
        fullName: 'Orestes Chena',
        gitHubUser: '@OrestesChena',
        currentPosition: 'Semi Sr. Frontend dev',
        currentCompany: 'Modo',
        matchDescription: 'Cumple con los requerimientos minimos',
        matchType: 1,
        gitHubURL: '',
        match: 77,
        matchE: 80,
        matchDev: 75,
        matchRating: {
          experience: {
            color: 1,
            rating: 90,
          },
          permanencia: {
            color: 2,
            rating: 65,
          },
          technologies: {
            color: 1,
            rating: 70,
          },
          salary: {
            color: 1,
            rating: 77,
          },
          requirements: {
            color: 1,
            rating: 76,
          },
          benefits: {
            color: 1,
            rating: 70,
          },
        },
        role: 'Frontend Developer',
        profileImageURL:
          'https://media-exp1.licdn.com/dms/image/C4E03AQFN7EOqYjsrAA/profile-displayphoto-shrink_200_200/0/1517721717978?e=1661385600&v=beta&t=QesE49ZFFKxXQsrxlPSOS8c_kDGV2Y2UiAZxwn8Gyuk',
        education: 'Terciario',
        experience: '6 años de experiencia',
        salary: 320000,
        seniority: 'SemiSenior',
      },
    ],
  },
  {
    title: 'Contratadxs',
    color: '#000',
    candidates: [
      {
        id: 5,
        fullName: 'Nadia Aquino',
        gitHubUser: '@NadiaAquino',
        currentPosition: 'Semi Sr. Frontend dev',
        currentCompany: 'Santander',
        matchDescription: 'Cumple con los requerimientos minimos',
        matchType: 1,
        gitHubURL: '',
        match: 85,
        matchE: 80,
        matchDev: 90,
        matchRating: {
          experience: {
            color: 1,
            rating: 75,
          },
          permanencia: {
            color: 1,
            rating: 80,
          },
          technologies: {
            color: 1,
            rating: 90,
          },
          salary: {
            color: 1,
            rating: 85,
          },
          requirements: {
            color: 1,
            rating: 90,
          },
          benefits: {
            color: 1,
            rating: 70,
          },
        },
        role: 'Frontend Developer',
        profileImageURL:
          'https://media-exp1.licdn.com/dms/image/C4E03AQEeu9BMEW3qIQ/profile-displayphoto-shrink_200_200/0/1610460508700?e=1661385600&v=beta&t=ca0RfMKLG6rcw9TFSj2ANl6SWg0Fr-5D9iz9IGJZj2w',
        education: 'Terciario',
        experience: '4 años de experiencia',
        salary: 310000,
        seniority: 'SemiSenior',
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

interface IBoardComponentProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  setSelectedProfile: Dispatch<SetStateAction<Candidate>>;
}

const BoardComponent = (props: IBoardComponentProps) => {
  const { setOpen, setSelectedProfile } = props;
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
