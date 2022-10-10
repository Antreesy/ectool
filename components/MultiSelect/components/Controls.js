import { classNames } from '../../../utils';

const CrossIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={3.5}
    stroke="currentColor"
    className="w-3.5 h-3.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const ChevronIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={3.5}
    stroke="currentColor"
    className="w-3.5 h-3.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
    />
  </svg>
);

const Controls = ({ controlRef, open, handleOpen, handleClear }) => {
  const clearButtonClass = classNames(
    'p-1 inline-flex rounded items-center justify-center text-gray-600',
    'hover:text-gray-500 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500 focus:bg-red-400',
    'dark:hover:bg-red-700 dark:focus:ring-red-900 dark:focus:bg-red-700'
  );

  const openButtonClass = classNames(
    'p-1 inline-flex rounded items-center justify-center text-gray-600',
    'hover:text-gray-500 hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500 focus:bg-sky-400',
    'dark:hover:bg-sky-700 dark:focus:ring-sky-900 dark:focus:bg-sky-700',
    open ? 'rotate-180' : ''
  );

  return (
    <div className="flex gap-1 shrink-0 items-center">
      <button className={clearButtonClass} onClick={handleClear}>
        <CrossIcon />
      </button>
      <div className="w-[1px] h-[20px] border-r-2 border-gray-200" />
      <button ref={controlRef} className={openButtonClass} onClick={handleOpen}>
        <ChevronIcon />
      </button>
    </div>
  );
};

export default Controls;
