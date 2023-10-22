import { useEffect, useState, useRef } from 'react';

type ObserverType = {
  root: Element | null;
  rootMargin: string;
  thresholds: number[] | number;
};

export default function useIntersectionObserver(
  options?: Partial<ObserverType>,
) {
  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return { ref, isIntersecting };
}
