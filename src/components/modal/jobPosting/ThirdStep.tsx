import { Dialog } from '@headlessui/react';

export default function ThirdStep() {
  return (
    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 rounded-t-lg">
      <div className="sm:flex sm:items-start">
        <div className="mt-3 w-full sm:mt-0 sm:ml-4 sm:text-left">
          <Dialog.Title
            as="h3"
            className="text-lg font-medium leading-6 text-gray-900"
          >
            Nuevo Puest de Trabajo
          </Dialog.Title>
          <div className="mt-6 w-full space-y-4">
            <div className="w-full">
              <label
                htmlFor="requirements"
                className="block text-sm font-medium text-gray-700"
              >
                Requisitos
              </label>
              <textarea
                id="requirements"
                name="requirements"
                rows={4}
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Requisitos principales para la realizacion del trabajo"
                defaultValue={''}
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="commodities"
                className="block text-sm font-medium text-gray-700"
              >
                Beneficios
              </label>
              <textarea
                id="commodities"
                name="commodities"
                rows={4}
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Beneficios que se le brindaran de parte de la empresa"
                defaultValue={''}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
