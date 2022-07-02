import { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import ReactSelect from 'react-select';
import makeAnimated from 'react-select/animated';

import { request } from '@/axios';
import { customStyles, technologiesOptions } from '@/constants/react-select';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const animatedComponents = makeAnimated();

const Index = () => {
  const router = useRouter();
  const { id } = router.query;

  const [paymentMethod, setPaymentMethod] = useState(1);

  const { isLoading, data } = useQuery(
    'candidateDetail',
    () =>
      request({
        url: `/candidates/${id}`,
        method: 'GET',
      }),
    {
      enabled: !!id,
    }
  ) as any;

  return (
    <Main meta={<Meta title="Hirely" description="Your hiring buddy." />}>
      {isLoading && <div>Loading...</div>}

      {!isLoading && data && (
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
                value={data.fullName}
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
                Email
              </label>
              <input
                value={data.email}
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
                value={data.modalidad}
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
                value={data.education}
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
                htmlFor="seniority"
                className="block text-sm font-medium text-gray-700"
              >
                Seniority
              </label>
              <select
                id="seniority"
                name="seniority"
                value={data.seniority}
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
                  defaultValue={technologiesOptions.filter((technology) =>
                    (data.techs as []).some(
                      (tech: any) => tech.tech.title === technology.label
                    )
                  )}
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
                value={data.experience}
                type="text"
                name="experience"
                id="experience"
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
                value={data.posicionActual}
                type="text"
                name="posicionActual"
                id="posicionActual"
                autoComplete="given-name"
                placeholder="Titulo del Puesto"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="col-span-6">
              <label
                htmlFor="fecha_nac"
                className="block text-sm font-medium text-gray-700"
              >
                Feha de Nacimiento
              </label>
              <input
                value={data.fecha_nac}
                type="text"
                name="fecha_nac"
                id="fecha_nac"
                autoComplete="given-name"
                placeholder="Titulo del Puesto"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="col-span-6">
              <label
                htmlFor="sexo"
                className="block text-sm font-medium text-gray-700"
              >
                Género
              </label>
              <input
                value={data.sexo}
                type="text"
                name="sexo"
                id="sexo"
                autoComplete="given-name"
                placeholder="sexo"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="col-span-6">
              <label
                htmlFor="salary"
                className="block text-sm font-medium text-gray-700"
              >
                Remuneracion
              </label>
              <div className="col-span-6 sm:col-span-3">
                <div className="relative col-span-6 sm:col-span-3">
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input
                      value={data.salary}
                      type="number"
                      name="salary"
                      id="salary"
                      className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="0.00"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-6">
              <label
                htmlFor="ingles"
                className="block text-sm font-medium text-gray-700"
              >
                Nivel de Inglés
              </label>
              <select
                id="ingles"
                name="ingles"
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
                <Link href="/candidates/candidates">
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
      )}
    </Main>
  );
};

export default Index;
