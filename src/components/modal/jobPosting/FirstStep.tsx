import { Dialog } from '@headlessui/react';

export default function FirstStep() {
  return (
    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 rounded-t-lg">
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
                Empresa
              </label>
              <input
                type="text"
                name="company"
                id="company"
                autoComplete="given-name"
                placeholder="Nombre de la Empresa"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Titulo
              </label>
              <input
                type="text"
                name="title"
                id="title"
                autoComplete="given-name"
                placeholder="Titulo del Puesto"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="type"
                className="block text-sm font-medium text-gray-700"
              >
                Modalidad
              </label>
              <select
                id="type"
                name="type"
                autoComplete="type-name"
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
                <option>Remoto</option>
                <option>Presencial</option>
                <option>Hibrido</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
