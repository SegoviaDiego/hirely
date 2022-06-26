import { useState } from 'react';

import Link from 'next/link';
import ReactSelect from 'react-select';
import makeAnimated from 'react-select/animated';

import { customStyles, technologiesOptions } from '@/constants/react-select';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const animatedComponents = makeAnimated();

const dev = {
  company: 'Santander',
  title: 'Frontend Developer',
  description:
    'Frontend developer con conocimientos de React, NextJs, PostgreSQL y Prisma',
  benefits:
    'Gimnasio, obra social de primera linea, refrigerios, becas por estudio',
  requirements:
    'Conocimientos de React, SSR utilizando NextJs, PostgreSQL y Prisma',
  minWage: '200000',
  maxWage: '320000',
};

const Index = () => {
  // @TODO: Redirect to sign-in or base path for authenticated users.
  const [paymentMethod, setPaymentMethod] = useState(1);

  return (
    <Main meta={<Meta title="Hirely" description="Your hiring buddy." />}>
      <div className="px-4">
        <h1 className="text-4xl font-bold">Detalle del Candidate</h1>
        <div className="grid w-full grid-cols-12 gap-6">
          <div className="col-span-6">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre completo
            </label>
            <input
              value={dev.company}
              type="text"
              name="name"
              id="name"
              autoComplete="given-name"
              placeholder="Nombre de la Empresa"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="col-span-6">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Mail
            </label>
            <input
              value={dev.title}
              type="text"
              name="title"
              id="title"
              autoComplete="given-name"
              placeholder="Titulo del Puesto"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="col-span-6">
            <label
              htmlFor="modality"
              className="block text-sm font-medium text-gray-700"
            >
              Modalidad
            </label>
            <select
              id="modality"
              name="modality"
              autoComplete="modality-name"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              <option>Remoto</option>
              <option>Presencial</option>
              <option>Hibrido</option>
            </select>
          </div>
          <div className="col-span-6">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium text-gray-700"
            >
              Educación
            </label>
            <input
              value={dev.description}
              type="text"
              name="name"
              id="name"
              autoComplete="given-name"
              placeholder="Breve descripcion del puesto"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="col-span-6">
            <label
              htmlFor="modality"
              className="block text-sm font-medium text-gray-700"
            >
              Seniority
            </label>
            <select
              id="modality"
              name="modality"
              autoComplete="modality-name"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              <option>Semi Senior</option>
              <option>Trainee</option>
              <option>Junior</option>
              <option>Senior</option>
            </select>
          </div>
          <div className="col-span-6">
            <label
              htmlFor="tecnologies"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Tecnologias
            </label>
            <div className="shadow-sm">
              <ReactSelect
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                defaultValue={[
                  technologiesOptions[0],
                  technologiesOptions[1],
                  technologiesOptions[7],
                  technologiesOptions[8],
                ]}
                options={technologiesOptions}
                styles={customStyles}
              />
            </div>
          </div>
          <div className="col-span-6">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium text-gray-700"
            >
              Años de Experiencia
            </label>
            <input
              value={dev.benefits}
              type="text"
              name="title"
              id="title"
              autoComplete="given-name"
              placeholder="Titulo del Puesto"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="col-span-6">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium text-gray-700"
            >
              Posicion Actual
            </label>
            <input
              value={dev.requirements}
              type="text"
              name="title"
              id="title"
              autoComplete="given-name"
              placeholder="Titulo del Puesto"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="col-span-6">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium text-gray-700"
            >
              Feha de Nacimiento
            </label>
            <input
              value={dev.requirements}
              type="text"
              name="title"
              id="title"
              autoComplete="given-name"
              placeholder="Titulo del Puesto"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="col-span-6">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium text-gray-700"
            >
              Género
            </label>
            <input
              value={dev.requirements}
              type="text"
              name="title"
              id="title"
              autoComplete="given-name"
              placeholder="Titulo del Puesto"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="col-span-6">
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
                      value={dev.minWage}
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
                        value={dev.maxWage}
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
          <div className="col-span-6">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium text-gray-700"
            >
              Nivel de Inglés
            </label>
            <select
              id="modality"
              name="modality"
              autoComplete="modality-name"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              <option>2 Meses</option>
              <option>1 Semana</option>
              <option>2 Semanas</option>
              <option>1 Mes</option>
              <option>3 Meses</option>
            </select>
            <div className="mt-6 flex justify-end">
              {/* TO DO: This should navigate using the jobPosting id. */}
              <Link href="/candidates">
                <a
                  type="button"
                  className="mt-3 inline-flex w-56 justify-center rounded-3xl border bg-indigo-600 p-4 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:text-sm"
                >
                  Volver
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Index;
