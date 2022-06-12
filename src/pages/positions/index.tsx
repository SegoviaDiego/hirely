import { useState } from 'react';

import {
  PencilAltIcon,
  PlusIcon,
  SearchIcon,
  TrashIcon,
} from '@heroicons/react/solid';

import CreateJobPostingModal from '@/components/modal/jobPosting/CreateJobPostingModal';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const positions = [
  {
    id: 1,
    post: 'Front End Dev',
    seniorty: 'Senior',
    deadline: '13/07/2022',
    minSalary: 50000,
    maxSalary: 100000,
    remote: true,
    status: 1,
  },
  {
    id: 2,
    post: 'Front End Dev',
    seniorty: 'Senior',
    deadline: '13/07/2022',
    minSalary: 50000,
    maxSalary: 100000,
    remote: true,
    status: 1,
  },
  {
    id: 3,
    post: 'Front End Dev',
    seniorty: 'Senior',
    deadline: '13/07/2022',
    minSalary: 50000,
    maxSalary: 100000,
    remote: true,
    status: 1,
  },
];

const Positions = () => {
  // @TODO: Redirect to sign-in or base path for authenticated users.
  const [jobPostingOpen, setJobPostingOpen] = useState(false);

  const [jobPostings] = useState(positions);

  return (
    <Main meta={<Meta title="Hirely" description="Your hiring buddy." />}>
      <CreateJobPostingModal
        isOpen={jobPostingOpen}
        setJobPostingOpen={setJobPostingOpen}
      />
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-900">Posiciones</h1>
            <p className="mt-2 text-sm text-gray-700">
              Lista de posiciones a considerar
            </p>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <button
              onClick={() => setJobPostingOpen(true)}
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
            >
              <PlusIcon className="w-7 pr-2" />
              Agregar Búsqueda
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
                        Puesto
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
                        Fecha
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Rango Salarial
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Modalidad
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Estado
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Accion
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
                          <div className="text-gray-900">{position.post}</div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <div className="text-gray-900">
                            {position.seniorty}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <div className="text-gray-900">
                            {position.deadline}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <div className="text-gray-900">
                            {new Intl.NumberFormat('es-AR', {
                              style: 'currency',
                              currency: 'ARS',
                            }).format(position.minSalary)}{' '}
                            -{' '}
                            {new Intl.NumberFormat('es-AR', {
                              style: 'currency',
                              currency: 'ARS',
                            }).format(position.maxSalary)}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <div className="text-gray-900">
                            {position.remote ? 'Remoto' : 'Presencial'}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                            Activo
                          </span>
                        </td>
                        <td className="relative flex flex-row whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <a
                            href="#"
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            <PencilAltIcon className="w-7" />
                          </a>
                          <a
                            href="#"
                            className="text-red-600 hover:text-red-900"
                          >
                            <TrashIcon className="w-7" />
                          </a>
                          <a
                            href={`/positions/${position.id}`}
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
