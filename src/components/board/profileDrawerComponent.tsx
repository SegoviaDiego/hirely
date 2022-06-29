/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import { Dispatch, Fragment, SetStateAction, useState } from 'react';

import { Dialog, Menu, Transition } from '@headlessui/react';
import {
  CalendarIcon,
  CheckIcon,
  ClockIcon,
  CodeIcon,
  DotsVerticalIcon,
  XIcon,
} from '@heroicons/react/outline';

import { Candidate } from './boardCard';

interface IProfileProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  selectedProfile: Candidate;
}

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
      return 'bg-green-400';
    case 2:
      return 'bg-yellow-400';
    case 3:
      return 'bg-red-500';
    default:
      return '';
  }
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export const ProfileDrawerComponent = (props: IProfileProps) => {
  const { open, setOpen, selectedProfile } = props;
  const [show, setShow] = useState('match');

  const handleSwap = () => {
    setShow(show === 'match' ? 'profile' : 'match');
  };

  const getInitials = (name: string): string => {
    if (name) {
      const nameArray = name.split(' ');

      return `${nameArray[0]?.[0] || ''}${nameArray[1]?.[0] || ''}`;
    }

    return '';
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <div className="fixed inset-0" />
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <h2
                          id="slide-over-heading"
                          className={`text-xl font-semibold text-gray-900 ${getColor(
                            selectedProfile?.matchType
                          )}`}
                        >
                          Match Total: {selectedProfile?.match}%
                        </h2>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* Main */}
                    <div>
                      <div className="pb-1 sm:pb-1">
                        <div>
                          <div className="flex">
                            <div
                              className={`h-40 w-40 rounded-md ml-6 flex items-center justify-center bg-opacity-60“ ${getBgColor(
                                selectedProfile?.matchType
                              )}`}
                            >
                              <p
                                className={`${getColor(
                                  selectedProfile?.matchType
                                )} font-semibold text-6xl`}
                              >
                                {getInitials(selectedProfile?.fullName)}
                              </p>
                            </div>
                            <div className="px-4 sm:flex sm:items-start sm:px-6">
                              <div className="sm:flex-1">
                                <div>
                                  <div className="flex items-center">
                                    <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                                      {selectedProfile?.fullName}
                                    </h3>
                                    <span className="ml-2.5 inline-block h-2 w-2 shrink-0 rounded-full bg-green-400">
                                      <span className="sr-only">Online</span>
                                    </span>
                                  </div>
                                  <p className="text-sm text-gray-500">
                                    {selectedProfile?.currentPosition}
                                  </p>
                                  <p className="text-sm text-gray-500">
                                    @{selectedProfile?.currentCompany}
                                  </p>
                                  <div className="flex items-center text-gray-500">
                                    <CodeIcon className="mr-2 h-4 text-indigo-600" />
                                    <a
                                      href={selectedProfile?.gitHubURL}
                                      className="text-sm hover:text-indigo-600 hover:underline"
                                    >
                                      {selectedProfile?.gitHubUser}
                                    </a>
                                  </div>
                                </div>
                                <div className="mt-5 flex flex-wrap space-y-3 sm:space-y-0 sm:space-x-3">
                                  <button
                                    type="button"
                                    className="inline-flex w-full shrink-0 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:flex-1"
                                  >
                                    Mensaje
                                  </button>
                                  {/* <button
                                    type="button"
                                    className="inline-flex w-full flex-1 items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                  >
                                    Descartar
                                  </button> */}
                                  <Menu
                                    as="div"
                                    className="relative inline-block text-left"
                                  >
                                    <Menu.Button className="inline-flex items-center rounded-md border border-gray-300 bg-white p-2 text-sm font-medium text-gray-400 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                      <span className="sr-only">
                                        Open options menu
                                      </span>
                                      <DotsVerticalIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    </Menu.Button>
                                    <Transition
                                      as={Fragment}
                                      enter="transition ease-out duration-100"
                                      enterFrom="transform opacity-0 scale-95"
                                      enterTo="transform opacity-100 scale-100"
                                      leave="transition ease-in duration-75"
                                      leaveFrom="transform opacity-100 scale-100"
                                      leaveTo="transform opacity-0 scale-95"
                                    >
                                      <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1">
                                          <Menu.Item>
                                            {({ active }) => (
                                              <button
                                                onClick={handleSwap}
                                                className={classNames(
                                                  active
                                                    ? 'bg-gray-100 text-gray-900'
                                                    : 'text-gray-700',
                                                  'px-4 py-2 text-sm w-full flex justify-start'
                                                )}
                                              >
                                                Ver{' '}
                                                {show === 'match'
                                                  ? 'Perfil'
                                                  : 'Match'}
                                              </button>
                                            )}
                                          </Menu.Item>
                                          <Menu.Item>
                                            {({ active }) => (
                                              <a
                                                href="#"
                                                className={classNames(
                                                  active
                                                    ? 'bg-gray-100 text-gray-900'
                                                    : 'text-gray-700',
                                                  'block px-4 py-2 text-sm'
                                                )}
                                              >
                                                Descartar
                                              </a>
                                            )}
                                          </Menu.Item>
                                        </div>
                                      </Menu.Items>
                                    </Transition>
                                  </Menu>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {show === 'match' && (
                        <div className="pt-10">
                          <dl className="space-y-8 px-4 sm:space-y-6 sm:px-6">
                            <div>
                              <dt className="grid grid-cols-2 text-lg font-bold text-gray-900">
                                <div className="col-span-1">
                                  {`Empresa: ${selectedProfile?.matchE}%`}
                                </div>
                                <div className="col-span-1">
                                  {`Candidato: ${selectedProfile?.matchDev}%`}
                                </div>
                              </dt>
                              <dd className="mt-4 grid grid-cols-2 gap-4">
                                <div className="col-span-1">
                                  <div className="mb-1 flex justify-between">
                                    <span className="text-base font-medium">
                                      Tecnologias
                                    </span>
                                    <span className="text-sm font-medium">
                                      {
                                        selectedProfile?.matchRating
                                          ?.technologies?.rating
                                      }
                                      %
                                    </span>
                                  </div>
                                  <div className="h-2.5 w-full rounded-full bg-gray-200">
                                    <div
                                      className={`h-2.5 rounded-full ${getBgColor(
                                        selectedProfile?.matchRating
                                          ?.technologies?.color
                                      )}`}
                                      style={{
                                        width: `${selectedProfile?.matchRating?.technologies?.rating}%`,
                                      }}
                                    ></div>
                                  </div>
                                </div>
                                <div className="col-span-1">
                                  <div className="mb-1 flex justify-between">
                                    <p className="text-base font-medium">
                                      Flexibilidad laboral
                                    </p>
                                    <p className="text-sm font-medium">
                                      {
                                        selectedProfile?.matchRating
                                          ?.requirements?.rating
                                      }
                                      %
                                    </p>
                                  </div>
                                  <div className="h-2.5 w-full rounded-full bg-gray-200">
                                    <div
                                      className={`h-2.5 rounded-full ${getBgColor(
                                        selectedProfile?.matchRating
                                          ?.requirements?.color
                                      )}`}
                                      style={{
                                        width: `${selectedProfile?.matchRating?.requirements?.rating}%`,
                                      }}
                                    ></div>
                                  </div>
                                </div>
                                <div className="col-span-1">
                                  <div className="mb-1 flex justify-between">
                                    <p className="text-base font-medium">
                                      Experiencia
                                    </p>
                                    <p className="text-sm font-medium">
                                      {
                                        selectedProfile?.matchRating?.experience
                                          ?.rating
                                      }
                                      %
                                    </p>
                                  </div>
                                  <div className="h-2.5 w-full rounded-full bg-gray-200">
                                    <div
                                      className={`h-2.5 rounded-full ${getBgColor(
                                        selectedProfile?.matchRating?.experience
                                          ?.color
                                      )}`}
                                      style={{
                                        width: `${selectedProfile?.matchRating?.experience?.rating}%`,
                                      }}
                                    ></div>
                                  </div>
                                </div>
                                <div className="col-span-1">
                                  <div className="mb-1 flex justify-between">
                                    <span className="text-base font-medium">
                                      Salario
                                    </span>
                                    <span className="text-sm font-medium">
                                      {
                                        selectedProfile?.matchRating?.salary
                                          ?.rating
                                      }
                                      %
                                    </span>
                                  </div>
                                  <div className="h-2.5 w-full rounded-full bg-gray-200">
                                    <div
                                      className={`h-2.5 rounded-full ${getBgColor(
                                        selectedProfile?.matchRating?.salary
                                          ?.color
                                      )}`}
                                      style={{
                                        width: `${selectedProfile?.matchRating?.salary?.rating}%`,
                                      }}
                                    ></div>
                                  </div>
                                </div>
                                <div className="col-span-1">
                                  <div className="mb-1 flex justify-between">
                                    <span className="text-base font-medium">
                                      Permanencia
                                    </span>
                                    <span className="text-sm font-medium">
                                      {
                                        selectedProfile?.matchRating
                                          ?.permanencia?.rating
                                      }
                                      %
                                    </span>
                                  </div>
                                  <div className="h-2.5 w-full rounded-full bg-gray-200">
                                    <div
                                      className={`h-2.5 rounded-full ${getBgColor(
                                        selectedProfile?.matchRating
                                          ?.permanencia?.color
                                      )}`}
                                      style={{
                                        width: `${selectedProfile?.matchRating?.permanencia?.rating}%`,
                                      }}
                                    ></div>
                                  </div>
                                </div>
                                <div className="col-span-1">
                                  <div className="mb-1 flex justify-between">
                                    <span className="text-base font-medium">
                                      Beneficios
                                    </span>
                                    <span className="text-sm font-medium">
                                      {
                                        selectedProfile?.matchRating?.benefits
                                          ?.rating
                                      }
                                      %
                                    </span>
                                  </div>
                                  <div className="h-2.5 w-full rounded-full bg-gray-200">
                                    <div
                                      className={`h-2.5 rounded-full ${getBgColor(
                                        selectedProfile?.matchRating?.benefits
                                          ?.color
                                      )}`}
                                      style={{
                                        width: `${selectedProfile?.matchRating?.benefits?.rating}%`,
                                      }}
                                    ></div>
                                  </div>
                                </div>
                              </dd>
                            </div>
                            <div>
                              <dt className="text-xl font-bold text-gray-900 sm:text-2xl">
                                Evaluacion
                              </dt>
                              <dd className="mt-4 text-sm text-gray-900 sm:col-span-2">
                                <ol className="relative ml-3 max-h-[250px] overflow-y-visible border-l border-gray-200">
                                  <li className="mb-10 ml-6">
                                    <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-200 ring-8 ring-white">
                                      <CheckIcon className="w-4 text-indigo-600" />
                                    </span>
                                    <h3 className="mb-1 flex items-center text-lg font-semibold text-gray-900">
                                      Entrevista con RR.HH.
                                    </h3>
                                    <time className="mb-2 block text-sm font-normal leading-none text-gray-400">
                                      Finalizado el 13 de Junio del 2022
                                    </time>
                                  </li>
                                  <li className="mb-10 ml-6">
                                    <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-200 ring-8 ring-white">
                                      <ClockIcon className="w-4 text-indigo-600" />
                                    </span>
                                    <h3 className="mb-1 text-lg font-semibold text-gray-900">
                                      Evaluacion tecnica{' '}
                                      <span className="mr-2 ml-3 rounded bg-indigo-100 px-2.5 py-0.5 text-sm font-medium text-indigo-800">
                                        Actual
                                      </span>
                                    </h3>
                                    <p className="text-base font-normal text-gray-500">
                                      En esta etapa se le va a realizar una
                                      evaluacion tecnica al candidato por uno de
                                      nuestros devs mas senior
                                    </p>
                                  </li>
                                  <li className="mb-10 ml-6">
                                    <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-200 ring-8 ring-white">
                                      <CalendarIcon className="w-4 text-indigo-600" />
                                    </span>
                                    <h3 className="mb-1 text-lg font-semibold text-gray-900">
                                      Entrevista con el CTO
                                    </h3>
                                  </li>
                                </ol>
                                <div className="mt-5 flex flex-wrap space-y-3 sm:space-y-0 sm:space-x-3">
                                  <button
                                    type="button"
                                    className="inline-flex w-full flex-1 items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                  >
                                    Retroceder
                                  </button>
                                  <button
                                    type="button"
                                    className="inline-flex w-full shrink-0 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:flex-1"
                                  >
                                    Avanzar
                                  </button>
                                </div>
                              </dd>
                            </div>
                          </dl>
                        </div>
                      )}
                      {show === 'profile' && (
                        <div className="px-6 pt-10">
                          <dt className="text-xl font-bold text-gray-900 sm:text-2xl">
                            Tecnologias
                          </dt>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
