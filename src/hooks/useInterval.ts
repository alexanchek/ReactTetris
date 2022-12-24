import { useEffect, useRef } from 'react';

interface IIntervalHookProps {
  callback: () => void;
  delay: number | null;
  pause: boolean;
}

export const useInterval = ({ callback, delay, pause }: IIntervalHookProps) => {
  const savedCallback = useRef<any>();
  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null && !pause) {
      const id = setInterval(tick, delay);
      return () => {
        clearInterval(id);
      };
    }
  }, [delay, pause]);
};
