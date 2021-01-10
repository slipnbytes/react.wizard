import React, {
  Children,
  createContext,
  useMemo,
  useState,
  useCallback,
  ReactNode,
} from 'react';

import { WizardContext, WizardProviderProps } from './types';

export const Context = createContext<WizardContext>({} as WizardContext);

export const Provider = ({ children }: WizardProviderProps): JSX.Element => {
  const [current, setCurrent] = useState(0);
  const [steps, setSteps] = useState<ReactNode>();

  const count = useMemo(() => Children.count(steps), [steps]);

  const registerSteps = useCallback((stepsToRegister: ReactNode): void => {
    setSteps(stepsToRegister);
  }, []);

  const getStep = useCallback(
    (stepIndex: number): ReactNode => {
      return Children.toArray(steps).find((_, index) => index === stepIndex);
    },
    [steps],
  );

  const next = useCallback(() => {
    const currentPlus = current + 1;

    if (currentPlus >= count) {
      return;
    }

    setCurrent(currentPlus);
  }, [count, current]);

  const previous = useCallback(() => {
    const currentPlus = current - 1;

    if (current <= 0) {
      return;
    }

    setCurrent(currentPlus);
  }, [count, current]);

  return (
    <Context.Provider
      value={{
        count,
        current,
        next,
        previous,
        getStep,
        registerSteps,
      }}
    >
      {children}
    </Context.Provider>
  );
};
