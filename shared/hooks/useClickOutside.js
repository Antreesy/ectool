import { useEffect } from 'react';

export const useClickOutside = (callback, ...elementRef) => {
  useEffect(() => {
    const handleClick = (event) => {
      if (
        elementRef.every(
          (el) => !el.current || !el.current.contains(event.target)
        )
      ) {
        callback(event.target);
      }
    };

    document.addEventListener('mousedown', handleClick);
    document.addEventListener('touchstart', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('touchstart', handleClick);
    };
  }, [elementRef, callback]);
};
