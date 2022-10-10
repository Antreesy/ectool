import { classNames } from '../../../utils';

const Option = ({ option, selected, handleChange }) => {
  const buttonClass = classNames(
    'w-full p-1 text-left text-sm bg-white',
    'hover:bg-blue-100 hover:font-medium  focus:outline-none focus:bg-blue-200 focus:font-medium',
    'disabled:text-gray-300 disabled:pointer-events-none',
    'dark:bg-gray-800 dark:hover:bg-blue-900 dark:focus:bg-blue-900 dark:disabled:text-gray-600',
    selected ? ' bg-green-100 font-medium dark:bg-green-900' : ''
  );

  return (
    <li>
      <button
        className={buttonClass}
        onClick={handleChange}
        value={option.key}
        disabled={option.disabled}
      >
        {option.name}
      </button>
    </li>
  );
};

export default Option;
