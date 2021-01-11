/* eslint-disable @typescript-eslint/no-empty-interface */

import { ReactNode, HTMLAttributes } from 'react';

export interface WizardProviderProps extends PropsWithChildren {}

export interface WizardContext {
  count: number;
  current: number;
  next(): void;
  previous(): void;
  getStep(stepIndex: number): ReactNode;
  registerSteps(stepsToRegister: ReactNode[]): void;
}

export interface StepsProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode[];
}

export interface WizardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface HeaderProps extends HTMLAttributes<HTMLHeadingElement> {
  custom?: HeaderCustomData[];
}

export interface HeaderCustomData {
  title: string;
  element: ReactNode;
}
