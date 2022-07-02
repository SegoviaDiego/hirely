import { Dialog } from '@headlessui/react';

export default function FourthStep() {
  return (
    <div className="rounded-t-lg bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
      <div className="sm:flex sm:items-start">
        <div className="mt-3 w-full sm:mt-0 sm:ml-4 sm:text-left">
          <Dialog.Title
            as="h3"
            className="text-lg font-medium leading-6 text-gray-900"
          >
            Nuevo Puesto de Trabajo
          </Dialog.Title>
          <div className="mt-6 w-full space-y-6">
            <div className="w-full">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                Género
              </label>
              <select
                id="sexo"
                name="sexo"
                autoComplete="modality-name"
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
                <option>Masculino</option>
                <option>Femenino</option>
              </select>
            </div>
            <div className="w-full">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Fecha de Nacimiento
              </label>
              <input
                type="date"
                name="fecha_nac"
                id="fecha_nac"
                autoComplete="given-name"
                placeholder="Fecha de nacimiento del candidato"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Edad
              </label>
              <input
                type="number"
                name="edad"
                id="edad"
                autoComplete="given-name"
                placeholder="Edad del candidato"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="salary"
                className="block text-sm font-medium text-gray-700"
              >
                Remuneracion
              </label>
              <div className="mt-6 grid grid-cols-6 gap-6">
                <div className="relative col-span-6 sm:col-span-3">
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input
                      type="number"
                      name="salary"
                      id="salary"
                      className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Salario pretendido"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
