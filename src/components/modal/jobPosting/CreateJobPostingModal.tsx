import { Dispatch, Fragment, SetStateAction, useRef, useState } from 'react';

import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';

import FirstStep from './FirstStep';
import FourthStep from './FourthStep';
import SecondStep from './SecondStep';
import SuccessStep from './SuccessStep';
import ThirdStep from './ThirdStep';

interface CreateJobPostingModalProps {
  isOpen: boolean;
  setJobPostingOpen: Dispatch<SetStateAction<boolean>>;
}

export default function CreateJobPostingModal(
  props: CreateJobPostingModalProps
) {
  const { isOpen, setJobPostingOpen } = props;
  const [currentStep, setCurrentStep] = useState(1);

  // FourthStep State
  const [paymentMethod, setPaymentMethod] = useState(1);

  const cancelButtonRef = useRef(null);

  const createJobPosting = async (event: any) => {
    event.preventDefault();
    event.stopPropagation();

    const createdJobPosting = await fetch('/api/jobPosting', {
      body: JSON.stringify({
        title: event.target.title.value,
        company: event.target.company.value,
        description: event.target.description.value,
        seniority: event.target.seniority.value,
        requirements: event.target.requirements.value,
        commodities: event.target.commodities.value,
        usdMaxSalary: event.target.usdMaxSalary.value,
        authorId: event.target.authorId.value,
        usdMinSalary: event.target.usdMinSalary.value,
        vacaciones: event.target.vacaciones.value,
        timelines: event.target.timelines.value,
        arsMinSalary: event.target.arsMinSalary.value,
        arsMaxSalary: event.target.arsMaxSalary.value,
        salaryType: event.target.salaryType.value,
        type: event.target.type.value,
        techs: event.target.techs.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    if (createdJobPosting) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setJobPostingOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <form
                action="#"
                method="POST"
                className="space-y-6"
                onSubmit={createJobPosting}
              >
                <div className="relative rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className={`${currentStep !== 1 && 'hidden'}`}>
                    <FirstStep />
                  </div>
                  <div className={`${currentStep !== 2 && 'hidden'}`}>
                    <SecondStep />
                  </div>
                  <div className={`${currentStep !== 3 && 'hidden'}`}>
                    <ThirdStep />
                  </div>
                  <div className={`${currentStep !== 4 && 'hidden'}`}>
                    <FourthStep
                      paymentMethod={paymentMethod}
                      setPaymentMethod={setPaymentMethod}
                    />
                  </div>
                  <div className={`${currentStep !== 5 && 'hidden'}`}>
                    <SuccessStep />
                  </div>
                  <div className="mt-6 rounded-b-lg bg-gray-50 px-4 py-3 sm:flex sm:px-6">
                    {currentStep === 1 && (
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-2xl border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-indigo-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-full sm:bg-opacity-30 sm:text-sm"
                        onClick={() => setJobPostingOpen(false)}
                      >
                        Cancelar
                      </button>
                    )}

                    {currentStep > 1 && currentStep < 5 && (
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-2xl border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-indigo-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-full sm:bg-opacity-30 sm:text-sm"
                        onClick={() => setCurrentStep(currentStep - 1)}
                      >
                        Anterior
                      </button>
                    )}

                    {currentStep <= 3 && (
                      <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-2xl border bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-full sm:text-sm"
                        onClick={() => setCurrentStep(currentStep + 1)}
                      >
                        Siguiente
                      </button>
                    )}

                    {currentStep === 4 && (
                      <button
                        type="submit"
                        className="mt-3 inline-flex w-full justify-center rounded-2xl border bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-full sm:text-sm"
                      >
                        Finalizar
                      </button>
                    )}

                    {currentStep === 5 && (
                      <Link href="/jobPosting/4">
                        <a
                          type="button"
                          className="mt-3 inline-flex w-full justify-center rounded-2xl border bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-full sm:text-sm"
                          ref={cancelButtonRef}
                        >
                          Ir al Detalle
                        </a>
                      </Link>
                    )}
                  </div>
                </div>
              </form>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
