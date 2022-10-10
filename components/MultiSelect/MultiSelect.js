// import order is important for maintaining. global imports first
import { useState, useMemo, useRef } from 'react';

// microcomponents, to make the code clean
import { Badge, Controls, Option } from './components';

// hooks, helpers, styles e.t.c in the end of import list
import { useClickOutside } from '../../shared/hooks/useClickOutside';
import { classNames, isMatched } from '../../utils';

const MultiSelect = ({ label, options, selectedKeys, onSelectionChange }) => {
  const menuRef = useRef(null);
  const controlRef = useRef(null);
  const inputRef = useRef(null);

  // handling the dropdown open/close state
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen((prev) => !prev);
  const handleClose = () => setOpen(false);

  // custom hook for dropdown closing
  useClickOutside(handleClose, menuRef, controlRef, inputRef);

  // handling the input content, filter options
  const [search, setSearch] = useState('');
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleFocus = () => setOpen(true);
  const filteredOptions = useMemo(
    () => options.filter((option) => isMatched(option.name, search)),
    [options, search]
  );

  // handling select changes
  const handleChange = (e) => {
    const newValue = e.currentTarget.value;

    // add or remove badge depending on it's presence in selectedKeys
    if (selectedKeys.includes(newValue)) {
      onSelectionChange(selectedKeys.filter((item) => item !== newValue));
    } else {
      onSelectionChange(selectedKeys.concat(newValue));
    }
  };
  const handleClear = () => {
    onSelectionChange([]);
    setSearch('');
    setOpen(false);
  };

  // long classnames (and callbacks) have been moved out from return()
  // to separate render and logic and make code readable
  // split tailwind classes for easier reading and maintaining
  const labelClass =
    'mb-2 block text-sm font-medium text-gray-700 dark:text-gray-200';
  const wrapperClass =
    'flex items-center justify-between w-96 px-1.5 py-0.5 border border-2 border-sky-500 dark:border-sky-600 rounded';
  const inputClass = classNames(
    'w-1/4 grow px-1 py-0.5 bg-transparent rounded text-xs font-medium placeholder:font-normal',
    'hover:bg-gray-200 focus:bg-gray-200 focus:outline-none',
    'dark:text-gray-200 dark:hover:bg-gray-700 dark:focus:bg-gray-700'
  );
  const dropdownClass =
    'absolute top-full w-full border border-2 border-grey-500 dark:border-gray-600 rounded overflow-hidden';

  return (
    <div className="relative pb-2">
      <label htmlFor="select" className={labelClass}>
        {label}
      </label>

      <div className={wrapperClass}>
        <div className="flex flex-wrap gap-1 w-4/5 h-full">
          {options
            .filter((option) => selectedKeys.includes(option.key))
            .map((option) => (
              <Badge
                key={option.key}
                option={option}
                handleChange={handleChange}
              />
            ))}
          <input
            ref={inputRef}
            className={inputClass}
            value={search}
            onFocus={handleFocus}
            onChange={handleSearch}
            placeholder="Start typing..."
          />
        </div>
        <Controls
          controlRef={controlRef}
          open={open}
          handleOpen={handleOpen}
          handleClear={handleClear}
        />
      </div>

      {open && (
        <div ref={menuRef} className={dropdownClass}>
          {filteredOptions.length ? (
            <ul>
              {filteredOptions.map((option) => (
                <Option
                  key={option.key}
                  option={option}
                  selected={selectedKeys.includes(option.key)}
                  handleChange={handleChange}
                />
              ))}
            </ul>
          ) : (
            <p className="w-full p-1 text-left text-sm">Nothing found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default MultiSelect;
