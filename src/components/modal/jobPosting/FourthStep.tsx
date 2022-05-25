import { Dispatch, SetStateAction } from 'react';

import { Dialog } from '@headlessui/react';

interface FourthStepProps {
  paymentMethod: number;
  setPaymentMethod: Dispatch<SetStateAction<number>>;
}

export default function FourthStep(props: FourthStepProps) {
  const { paymentMethod, setPaymentMethod } = props;
  return (
    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 rounded-t-lg">
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
                Duracion estimada de la busqueda
              </label>
              <select
                id="modality"
                name="modality"
                autoComplete="modality-name"
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
                <option>1 Semana</option>
                <option>2 Semanas</option>
                <option>1 Mes</option>
                <option>2 Meses</option>
                <option>3 Meses</option>
              </select>
            </div>
            <div className="w-full">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Remuneracion
              </label>
              <div className="mt-4 flex items-center">
                <input
                  value={1}
                  checked={paymentMethod === 1}
                  onChange={() => setPaymentMethod(1)}
                  id="push-email"
                  name="push-notifications"
                  type="radio"
                  className="h-4 w-4 cursor-pointer border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="pesos"
                  className="ml-3 mr-6 block text-sm font-medium text-gray-700"
                >
                  Pesos
                </label>
                <input
                  value={2}
                  checked={paymentMethod === 2}
                  onChange={() => setPaymentMethod(2)}
                  id="push-email"
                  name="push-notifications"
                  type="radio"
                  className="h-4 w-4 cursor-pointer border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="pesos"
                  className="ml-3 mr-6 block text-sm font-medium text-gray-700"
                >
                  Dolares
                </label>
                <input
                  value={3}
                  checked={paymentMethod === 3}
                  onChange={() => setPaymentMethod(3)}
                  id="push-email"
                  name="push-notifications"
                  type="radio"
                  className="h-4 w-4 cursor-pointer border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="pesos"
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  Hibrida
                </label>
              </div>
              {paymentMethod !== 2 && (
                <div className="mt-6 grid grid-cols-6 gap-6">
                  <div className="relative col-span-6 sm:col-span-3">
                    <div className="relative mt-1 rounded-md shadow-sm">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-gray-500 sm:text-sm">$</span>
                      </div>
                      <input
                        type="text"
                        name="price"
                        id="price"
                        className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="0.00"
                      />
                    </div>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <div className="relative col-span-6 sm:col-span-3">
                      <div className="relative mt-1 rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <span className="text-gray-500 sm:text-sm">$</span>
                        </div>
                        <input
                          type="text"
                          name="price"
                          id="price"
                          className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder="0.00"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {paymentMethod !== 1 && (
                <div className="mt-6 grid grid-cols-6 gap-6">
                  <div className="relative col-span-6 sm:col-span-3">
                    <div className="relative mt-1 rounded-md shadow-sm">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-gray-500 sm:text-sm">U$D</span>
                      </div>
                      <input
                        type="text"
                        name="price"
                        id="price"
                        className="block w-full rounded-md border-gray-300 pl-11 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="0.00"
                      />
                    </div>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <div className="relative col-span-6 sm:col-span-3">
                      <div className="relative mt-1 rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <span className="text-gray-500 sm:text-sm">U$D</span>
                        </div>
                        <input
                          type="text"
                          name="price"
                          id="price"
                          className="block w-full rounded-md border-gray-300 px-11 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder="0.00"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
