import { SetStateAction } from 'react';

import { Dialog } from '@headlessui/react';
import { PlusCircleIcon, XCircleIcon } from '@heroicons/react/outline';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

interface EvaluationStepProps {
  timeline: any;
  setTimeline: any;
  newStep: any;
  setNewStep: any;
  editStep: number;
  setEditStep: (value: SetStateAction<number>) => void;
  handleDeleteStep: (i: number) => void;
  handleAddStep: () => Promise<void>;
  handleEditStep: (index: number) => void;
}
export default function EvaluationStep(props: EvaluationStepProps) {
  const {
    timeline,
    setTimeline,
    editStep,
    setEditStep,
    handleAddStep,
    handleDeleteStep,
    setNewStep,
    newStep,
    handleEditStep,
  } = props;
  return (
    <div className="rounded-t-lg bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
      <div className="sm:flex sm:items-start">
        <div className="mt-3 w-full sm:mt-0 sm:ml-4 sm:text-left">
          <Dialog.Title
            as="h3"
            className="text-lg font-medium leading-6 text-gray-900"
          >
            Pasos de Evaluacion
          </Dialog.Title>
          <div className="mt-6 w-full space-y-4">
            <ul role="list" className="ml-8 list-disc space-y-2 text-sm">
              {timeline.length !== 0 &&
                timeline.map((timel: any, index: number) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <li>
                      {editStep === index ? (
                        <div className="flex">
                          <input
                            type="text"
                            name="stepEditTitle"
                            id="stepEditDesc"
                            placeholder="Titulo"
                            className="mt-1 mr-4 block w-36 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                          <input
                            type="text"
                            name="stepEditDesc"
                            id="stepEditDesc"
                            placeholder="Descripcion"
                            className="mt-1 mr-4 block w-64 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      ) : (
                        <div className="flex-col items-center">
                          <p className="mr-2 text-xl font-bold">
                            {timel.title}
                          </p>
                          <p className="text-gray-500">{timel.desc}</p>
                        </div>
                      )}
                    </li>
                    <div className="flex items-center space-x-2">
                      {editStep === index ? (
                        <>
                          <PlusCircleIcon
                            onClick={() => handleEditStep(index)}
                            className="h-7 w-7 cursor-pointer text-indigo-600"
                          />
                          <XCircleIcon
                            onClick={() => setEditStep(-1)}
                            className="h-7 w-7 cursor-pointer text-indigo-600"
                          />
                        </>
                      ) : (
                        <>
                          {/* <PencilAltIcon
                            onClick={() => {
                              // reset({ ingredientEdit: ingredient });
                              setEditStep(index);
                            }}
                            className="h-7 w-7 cursor-pointer text-indigo-600"
                          /> */}
                          <XCircleIcon
                            onClick={() => handleDeleteStep(index)}
                            className="h-7 w-7 cursor-pointer text-indigo-600"
                          />
                        </>
                      )}
                    </div>
                  </div>
                ))}
              <li>
                <div className="flex items-center justify-between">
                  <div className="flex">
                    <input
                      value={newStep.title}
                      onChange={(e) =>
                        setNewStep({ ...newStep, title: e.target.value })
                      }
                      type="text"
                      name="stepTitle"
                      id="stepTitle"
                      placeholder="Titulo"
                      className="mt-1 mr-4 block w-36 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                    <input
                      value={newStep.desc}
                      onChange={(e) =>
                        setNewStep({ ...newStep, desc: e.target.value })
                      }
                      type="text"
                      name="stepDesc"
                      id="stepDesc"
                      placeholder="Descripcion"
                      className="mt-1 mr-4 block w-64 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <PlusCircleIcon
                    onClick={() => handleAddStep()}
                    className="h-7 w-7 cursor-pointer text-indigo-600"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
