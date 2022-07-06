import { Dialog } from '@headlessui/react';
import { CheckCircleIcon } from '@heroicons/react/outline';

export default function SuccessStep() {
  return (
    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 rounded-t-lg">
      <div className="sm:flex sm:items-start">
        <div className="mt-3 w-full sm:mt-0 sm:ml-4 sm:text-left">
          <Dialog.Title
            as="h3"
            className="text-center text-lg font-medium leading-6 text-green-500"
          >
            CV del candidato creado exitosamente!
          </Dialog.Title>
          <div className="my-8 flex justify-center">
            <div className="mx-auto flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0">
              <CheckCircleIcon
                className="h-10 w-10 text-green-600"
                aria-hidden="true"
              />
            </div>
          </div>
          <div className="mt-6 w-full space-y-4 text-center">
            <p className="text-base text-gray-400">
              El cv del candidato fue agregado a la lista, puedes acceder al
              detalle
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
