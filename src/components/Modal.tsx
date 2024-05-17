import { FC } from 'react';
import { prettifyNumber } from '../1.shared/helpers';

interface ComponentProps {
  isOpen: boolean;
  closeModal: () => void;
  modalInfo: any;
}

export const Modal: FC<ComponentProps> = ({
  isOpen,
  closeModal,
  modalInfo,
}) => {
  return (
    <div
      className={`fixed top-0 left-0 z-10 w-full h-full cursor-pointer bg-gray-900 bg-opacity-50 flex justify-center items-center ${
        isOpen ? '' : 'hidden'
      }`}
      onClick={closeModal}
    >
      <div className={`bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg`}>
        <button
          className={`absolute text-3xl top-4 right-16 text-gray-600 dark:text-white hover:text-gray-900 dark:hover:text-gray-300`}
          onClick={closeModal}
        >
          &times;
        </button>
        <h2
          className={`text-xl font-semibold mb-4 text-gray-900 dark:text-white`}
        >
          {modalInfo?.name}
        </h2>
        <p className={`text-gray-800 dark:text-gray-300`}>
          ${prettifyNumber(parseFloat(modalInfo?.priceUsd).toFixed(2))}
        </p>
        {/* Add more content here based on the modalInfo */}
      </div>
    </div>
  );
};
