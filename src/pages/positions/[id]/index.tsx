import { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import ReactSelect from 'react-select';
import makeAnimated from 'react-select/animated';

import { customStyles, technologiesOptions } from '@/constants/react-select';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';
import { later } from '@/utils/later';
import { mockedPositions } from '@/utils/mockedData';

const animatedComponents = makeAnimated();

const Index = () => {
  const router = useRouter();
  const { id } = router.query;

  // @TODO: Redirect to sign-in or base path for authenticated users.
  const [, setPaymentMethod] = useState(1);

  const { isLoading, isIdle, data } = useQuery(
    'jobPostingDetail',
    async () => {
      await later(1000);
      return mockedPositions[id as any];
    },
    {
      enabled: !!id,
    }
  );

  return (
    <Main meta={<Meta title="Hirely" description="Your hiring buddy." />}>
      {!isIdle && !isLoading && (
        <div className="px-4">
          <h1 className="text-4xl font-bold">{data?.title}</h1>
          <div className="grid w-full grid-cols-12 gap-6">
            <div className="col-span-6">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Titulo
              </label>
              <input
                value={data?.title}
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
                value={data?.type}
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
                <option value="REMOTE">Remoto</option>
                <option value="OFFICE">Presencial</option>
                <option value="BOTH">Hibrido</option>
              </select>
            </div>
            <div className="col-span-6">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                Descripcion
              </label>
              <input
                value={data?.description}
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
                value={data?.seniority}
              >
                <option value="TRAINEE">Trainee</option>
                <option value="JUNIOR">Junior</option>
                <option value="SEMISENIOR">Semi Senior</option>
                <option value="SENIOR">Senior</option>
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
                  value={technologiesOptions.filter((tech) => {
                    return data?.techs.includes(tech.value);
                  })}
                  options={technologiesOptions}
                  styles={customStyles}
                />
              </div>
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
                  checked={data?.salaryType === 'ARS'}
                  onChange={() => setPaymentMethod(1)}
                  id="pesos"
                  name="pesos"
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
                  checked={data?.salaryType === 'USD'}
                  onChange={() => setPaymentMethod(2)}
                  id="usd"
                  name="usd"
                  type="radio"
                  className="h-4 w-4 cursor-pointer border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="usd"
                  className="ml-3 mr-6 block text-sm font-medium text-gray-700"
                >
                  Dolares
                </label>
                <input
                  value={3}
                  checked={data?.salaryType === 'BOTH'}
                  onChange={() => setPaymentMethod(3)}
                  id="both"
                  name="both"
                  type="radio"
                  className="h-4 w-4 cursor-pointer border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="both"
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  Hibrida
                </label>
              </div>
              <div className="mt-6 grid grid-cols-6 gap-6">
                <div className="relative col-span-6 sm:col-span-3">
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input
                      value={data?.arsMinSalary}
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
                        value={data?.arsMaxSalary}
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
            </div>
            <div className="col-span-6">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                Beneficios
              </label>
              <textarea
                value={data?.commodities}
                id="about"
                name="about"
                rows={4}
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Requisitos principales para la realizacion del trabajo"
                defaultValue={''}
              />
            </div>
            <div className="col-span-6">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                Requisitos
              </label>
              <textarea
                value={data?.requirements}
                id="about"
                name="about"
                rows={4}
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Beneficios que se le brindaran de parte de la empresa"
                defaultValue={''}
              />
            </div>
            <div className="col-span-12">
              <div className="mt-6 flex justify-end">
                {/* TO DO: This should navigate using the jobPosting id. */}
                <Link href={`/positions/${data.id}/board`}>
                  <a
                    type="button"
                    className="mt-3 inline-flex w-56 justify-center rounded-3xl border bg-indigo-600 p-4 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:text-sm"
                  >
                    Ver candidatos
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
