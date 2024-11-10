import ellipse from '../assets/ellipse.svg';

interface InputOutputDisplayProps {
  variant: 'input' | 'output';
  value: number;
  onValueChange?: (value: number) => void;
}

function InputOutputDisplay(
  props: InputOutputDisplayProps
) {
  const {
    variant,
    value,
    onValueChange = () => {},
  } = props;

  return (
    <div
      className={`absolute top-40 ${
        variant === 'input' ? '-left-10' : '-right-10'
      }`}
    >
      <div className='flex flex-col w-32 gap-y-2 '>
        <div
          className={`font-semibold text-xs rounded-xl px-3 py-1  text-center  ${
            variant === 'input'
              ? 'text-white bg-orange-500'
              : 'text-white bg-green-600'
          }`}
        >
          {variant === 'input'
            ? ' Initial value of x'
            : 'Final Output y'}
        </div>

        <div
          className={`rounded-2xl border-2  bg-white flex items-center ${
            variant === 'input'
              ? 'flex-row border-orange-400'
              : 'flex-row-reverse border-green-500'
          }`}
        >
          <input
            type='number'
            value={value}
            onChange={(e) =>
              onValueChange(Number(e.target.value))
            }
            className={` w-[65%] py-3  font-bold text-lg text-center ${
              variant === 'input'
                ? 'rounded-l-2xl border-r border-r-orange-100 '
                : 'rounded-r-2xl border-l border-l-green-100 '
            }`}
          />
          <div className='flex flex-1 justify-center'>
            <img
              src={ellipse}
              className=' '
              alt='Ellipse'
              id={
                variant === 'input'
                  ? 'input-ellipse'
                  : 'output-ellipse'
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputOutputDisplay;
