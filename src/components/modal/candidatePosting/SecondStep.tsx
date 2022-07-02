import { Dialog } from '@headlessui/react';
import ReactSelect from 'react-select';
import makeAnimated from 'react-select/animated';

import { customStyles, technologiesOptions } from '@/constants/react-select';

const animatedComponents = makeAnimated();

export default function SecondStep() {
  return (
    <div className="rounded-t-lg bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
      <div className="sm:flex sm:items-start">
        <div className="mt-3 w-full sm:mt-0 sm:ml-4 sm:text-left">
          <Dialog.Title
            as="h3"
            className="text-lg font-medium leading-6 text-gray-900"
          >
            Nuevo Candidato
          </Dialog.Title>
          <div className="mt-6 w-full space-y-4">
            <div className="w-full">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                Posicion actual
              </label>
              <input
                type="text"
                name="posicionActual"
                id="posicionActual"
                autoComplete="given-name"
                placeholder="Posicion actual del candidato"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                Vacaciones pretendidas
              </label>
              <input
                type="number"
                name="vacaciones"
                id="vacaciones"
                autoComplete="given-name"
                placeholder="Vacaciones pretendidas del candidato"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="modality"
                className="block text-sm font-medium text-gray-700"
              >
                Modalidad
              </label>
              <select
                id="modalidad"
                name="modalidad"
                autoComplete="modality-name"
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
                <option>Remoto</option>
                <option>Presencial</option>
                <option>Hibrido</option>
              </select>
            </div>
            <div className="w-full">
              <label
                htmlFor="tecnologies"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Tecnologias
              </label>
              <ReactSelect
                id="tecnologies"
                name="tecnologies"
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                options={technologiesOptions}
                styles={customStyles}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
