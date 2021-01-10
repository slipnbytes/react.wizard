/* eslint-disable @typescript-eslint/no-empty-interface */

import { ReactNode } from 'react';

export interface WizardProviderProps extends PropsWithChildren {}

export interface StepsProps {
  children: ReactNode[];
}

export interface WizardProps {
  children: ReactNode;
}

export interface WizardContext {
  count: number;
  current: number;
  next(): void;
  previous(): void;
  getStep(stepIndex: number): ReactNode;
  registerSteps(stepsToRegister: ReactNode[]): void;
}
