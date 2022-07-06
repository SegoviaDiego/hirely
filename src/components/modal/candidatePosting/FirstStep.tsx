import { Dialog } from '@headlessui/react';

export default function FirstStep() {
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
                Nombre completo
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                autoComplete="given-name"
                placeholder="Nombre del candidato"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="given-name"
                placeholder="Email del candidato"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Perfil externo
              </label>
              <input
                type="text"
                name="perfilExterno"
                id="perfilExterno"
                autoComplete="given-name"
                placeholder="Perfil externo del candidato"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="seniority"
                className="block text-sm font-medium text-gray-700"
              >
                Seniority
              </label>
              <select
                id="seniority"
                name="seniority"
                autoComplete="seniority-name"
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
                <option>Trainee</option>
                <option>Junior</option>
                <option>SemiSenior</option>
                <option>Senior</option>
              </select>
            </div>
            <div className="w-full">
              <label
                htmlFor="seniority"
                className="block text-sm font-medium text-gray-700"
              >
                Ingles
              </label>
              <select
                id="ingles"
                name="ingles"
                autoComplete="ingles-name"
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
                <option>Principiante</option>
                <option>Basico</option>
                <option>Intermedio</option>
                <option>Avanzado</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
