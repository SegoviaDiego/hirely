import { useState } from 'react';

import { PlusIcon, SearchIcon } from '@heroicons/react/solid';

import CreateCandidateModal from '@/components/modal/candidatePosting/CreateCandidateModal';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const positions = [
  {
    id: 1,
    name: 'Luis Cerquone',
    seniority: 'Semi Senior',
    mail: 'luis@uade.com',
    posicionActual: 'Frontend Developer Sr',
  },
  {
    id: 2,
    name: 'Sebastian Nicolino',
    seniority: 'Semi Senior',
    mail: 'luis@uade.com',
    posicionActual: 'Frontend Developer Sr',
  },
  {
    id: 3,
    name: 'Federico Arenales',
    seniority: 'Semi Senior',
    mail: 'luis@uade.com',
    posicionActual: 'Frontend Developer Sr',
  },
];

const Positions = () => {
  // @TODO: Redirect to sign-in or base path for authenticated users.
  const [candidateOpen, setCandidateOpen] = useState(false);

  const [jobPostings] = useState(positions);

  return (
    <Main meta={<Meta title="Hirely" description="Your hiring buddy." />}>
      <CreateCandidateModal
        isOpen={candidateOpen}
        setCandidateOpen={setCandidateOpen}
      />
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-900">Candidates</h1>
            <p className="mt-2 text-sm text-gray-700">
              Listado total de candidatos del sistema
            </p>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <button
              onClick={() => setCandidateOpen(true)}
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
            >
              <PlusIcon className="w-7 pr-2" />
              Agregar Perfil de Candidate
            </button>
          </div>
        </div>
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        ID
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Nombre
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Seniority
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Mail
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Posición Actual
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Detalle del Perfil
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {jobPostings.map((position) => (
                      <tr key={position.id}>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <div className="text-gray-900">#{position.id}</div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <div className="text-gray-900">{position.name}</div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <div className="text-gray-900">
                            {position.seniority}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <div className="text-gray-900">{position.mail}</div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <div className="text-gray-900">
                            {position.posicionActual}
                          </div>
                        </td>
                        <td className="relative flex flex-row whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <a
                            href={`/candidates/${position.id}`}
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            <SearchIcon className="w-7" />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Positions;
