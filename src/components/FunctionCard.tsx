import React from 'react';
import dragHandle from '../assets/drag-handle.svg';
import ellipse from '../assets/ellipse.svg';

interface FunctionCardProps {
  id: number;
  equation: string;
  nextFunction: number | null;
  onEquationChange: (equation: string) => void;
  onNextFunctionChange: (
    nextFunction: number | null
  ) => void;
}

export const FunctionCard: React.FC<FunctionCardProps> = ({
  id,
  equation,
  nextFunction,
  onEquationChange,
  onNextFunctionChange,
}) => {
  return (
    <div className='rounded-2xl shadow-sm p-6  bg-card border border-card-border w-60'>
      <div className='flex items-center gap-1 mb-4'>
        <img
          src={dragHandle}
          alt='Card drag handle'
          className='text-gray-600'
        />
        <span className='text-gray-700 font-semibold text-sm'>
          Function: {id}
        </span>
      </div>

      <div className='space-y-4'>
        <div>
          <label className='block font-medium text-gray-900 mb-1 text-xs'>
            Equation
          </label>
          <input
            type='text'
            value={equation}
            onChange={(e) =>
              onEquationChange(e.target.value)
            }
            className='w-full px-3 text-xs font-medium py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='e.g., x^2 + 2x + 1'
          />
        </div>

        <div>
          <label className='block font-medium text-gray-900 mb-1 text-xs'>
            Next function
          </label>
          <select
            disabled
            className='w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 cursor-not-allowed font-medium text-xs text-gray-700'
            value={nextFunction || ''}
            onChange={(e) => {
              onNextFunctionChange(
                e.target.value
                  ? Number(e.target.value)
                  : null
              );
            }}
          >
            <option value=''>-</option>
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                Function: {num}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className='flex justify-between mt-6'>
        <div className='flex items-center gap-2'>
          <img
            src={ellipse}
            className=' '
            alt='Ellipse'
            id={`function-input-${id}`}
          />
          <span className='text-[10px] font-medium text-gray-800'>
            input
          </span>
        </div>
        <div className='flex items-center gap-2'>
          <span className='text-[10px] font-medium text-gray-800'>
            output
          </span>
          <img
            src={ellipse}
            className=' '
            alt='Ellipse'
            id={`function-output-${id}`}
          />
        </div>
      </div>
    </div>
  );
};
