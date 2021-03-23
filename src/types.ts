import type { ReactNode, HTMLAttributes } from 'react';

export interface WizardProviderProps {
  children?: ReactNode;
}

export interface WizardContextData {
  count: number;
  current: number;
  next(): void;
  previous(): void;
  getStep(stepIndex: number): ReactNode;
  registerSteps(stepsToRegister: ReactNode[]): void;
}

export interface WizardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface WizardStepsProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode[];
}

export interface HeaderProps extends HTMLAttributes<HTMLHeadingElement> {
  custom?: HeaderCustomData[];
}

export interface HeaderCustomData {
  title: string;
  element: ReactNode;
}
