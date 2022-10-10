import { classNames } from '../../../utils';

const CrossIcon = () => (
  <svg
    className="w-3.5 h-3.5"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const Badge = ({ option, handleChange }) => {
  const buttonClass = classNames(
    'flex items-center gap-1 px-1 py-0.5 bg-gray-300 rounded group',
    'focus:bg-gray-400 focus:outline-none active:bg-gray-300',
    'dark:bg-gray-700 dark:focus:bg-gray-600'
  );

  const labelClass = 'text-xs font-medium text-gray-700 dark:text-gray-200';

  const clearClass = classNames(
    'p-0.5 rounded-sm inline-flex items-center justify-center',
    'group-hover:bg-red-400 group-focus:outline-none group-focus:bg-red-400'
  );

  return (
    <button className={buttonClass} value={option.key} onClick={handleChange}>
      <span className={labelClass}>{option.name}</span>
      <div className={clearClass}>
        <CrossIcon />
      </div>
    </button>
  );
};

export default Badge;
