import { useCallback, useEffect, useRef } from 'react';

export type DebounceCB = () => void;

export type UseDebounceHook = (cb: DebounceCB, delay: number) => void;

export const useDebounce = (): UseDebounceHook => {
  const buffer = useRef<number>(0);

  const clearBuffer = useCallback(() => {
    if (buffer.current) {
      clearTimeout(buffer.current);
      buffer.current = 0;
    }
  }, []);

  const initDebounce: UseDebounceHook = (callback, delay) => {
    clearBuffer();
    const fireAction = setTimeout(() => {
      callback();
      clearBuffer();
    }, delay);
    buffer.current = fireAction as unknown as number;
  };

  useEffect(
    () => () => {
      clearBuffer();
    },
    [clearBuffer]
  );

  return initDebounce;
};
