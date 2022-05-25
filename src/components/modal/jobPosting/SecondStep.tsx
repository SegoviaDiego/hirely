import { customStyles, technologiesOptions } from '@/constants/react-select';
import { Dialog } from '@headlessui/react';
import ReactSelect from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

export default function SecondStep() {
  return (
    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
      <div className="sm:flex sm:items-start">
        <div className="mt-3 w-full sm:mt-0 sm:ml-4 sm:text-left">
          <Dialog.Title
            as="h3"
            className="text-lg font-medium leading-6 text-gray-900"
          >
            Nuevo Puesto de trabajo
          </Dialog.Title>
          <div className="mt-6 w-full space-y-4">
            <div className="w-full">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                Descripcion
              </label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="given-name"
                placeholder="Breve descripcion del puesto"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="modality"
                className="block text-sm font-medium text-gray-700"
              >
                Antiguedad
              </label>
              <select
                id="modality"
                name="modality"
                autoComplete="modality-name"
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
                <option>Junior</option>
                <option>Semi Senior</option>
                <option>Senior</option>
              </select>
            </div>
            <div className="w-full">
              <label
                htmlFor="tecnologies"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Tecnologias
              </label>
              <ReactSelect
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
