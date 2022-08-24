import React from 'react';
import { useToggleState } from 'react-stately';
import { useFocusRing, useSwitch, VisuallyHidden } from 'react-aria';
import { classNames } from '../utils';

const Toggle = (props) => {
    const state = useToggleState(props);
    const ref = React.useRef();
    const { inputProps } = useSwitch(props, state, ref);
    const { isFocusVisible, focusProps } = useFocusRing();

    return (  
        <label className='inline-flex relative items-center cursor-pointer'>
            <VisuallyHidden>
                <input {...inputProps} {...focusProps} ref={ref} />
            </VisuallyHidden>
            <div 
                className={classNames(
                    state.isSelected ? 'bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500' : 'bg-gray-300 dark:bg-gray-700',
                    'relative inline-flex h-6 w-11 items-center rounded-full transition-colors outline-none'
                )}
            >
                <span className={classNames(
                    state.isSelected ? 'translate-x-6' : 'translate-x-1',
                    isFocusVisible ? 'ring-4 ring-offset-2 ring-gray-300 dark:ring-gray-800' : '',
                    'inline-block h-4 w-4 transform rounded-full bg-white transition-transform'
                )}
                ></span>
            </div>
            <span className='ml-3 text-sm font-medium text-gray-900 dark:text-gray-300'>{props.children}</span>
        </label>   
    )
};

export default Toggle;