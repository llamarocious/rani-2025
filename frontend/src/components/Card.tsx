import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Card as CardType } from '../types';

interface CardModalProps {
  card: CardType | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CardModal: React.FC<CardModalProps> = ({ card, isOpen, onClose }) => {
  return (
    <Transition show={isOpen} as={React.Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={onClose}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black opacity-30" />
          </Transition.Child>

          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              {card && (
                <>
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-medium leading-6 text-gray-900 mb-4"
                  >
                    {card.title}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-gray-700 text-lg">{card.content}</p>
                    {card.image && (
                      <img
                        src={card.image}
                        alt="Card illustration"
                        className="mt-4 rounded-lg w-full"
                      />
                    )}
                  </div>
                </>
              )}
              <div className="mt-6">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  onClick={onClose}
                >
                  Close
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};