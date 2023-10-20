import { useEffect } from 'react';

export default function useClickOutside(
  ref: React.MutableRefObject<any>,
  clickOutFunc: () => any,
) {
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target)) {
        clickOutFunc();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
}
