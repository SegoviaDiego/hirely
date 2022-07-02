import { Dialog } from '@headlessui/react';

export default function ThirdStep() {
  return (
    <div className="rounded-t-lg bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
      <div className="sm:flex sm:items-start">
        <div className="mt-3 w-full sm:mt-0 sm:ml-4 sm:text-left">
          <Dialog.Title
            as="h3"
            className="text-lg font-medium leading-6 text-gray-900"
          >
            Nuevo candidato
          </Dialog.Title>
          <div className="mt-6 w-full space-y-4">
            <div className="w-full">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                Empresa actual
              </label>
              <input
                type="text"
                id="empresaActual"
                name="empresaActual"
                autoComplete="given-name"
                placeholder="Empresa actual del candidato"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                Eduación
              </label>
              <input
                type="text"
                id="education"
                name="education"
                autoComplete="given-name"
                placeholder="Educacion del candidato"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                Experiencia
              </label>
              <input
                type="number"
                id="experience"
                name="experience"
                autoComplete="given-name"
                placeholder="Experiencia del candidato en años"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                Permanencia
              </label>
              <input
                type="number"
                id="permanencia"
                name="permanencia"
                autoComplete="given-name"
                placeholder="Permanencia del candidato"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
