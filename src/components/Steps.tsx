import React, { useEffect } from 'react';

import useWizard from '../hooks/useWizard';
import { StepsProps } from '../types';

const Steps = ({ children }: StepsProps): JSX.Element => {
  const { current, getStep, registerSteps } = useWizard();

  useEffect(() => {
    registerSteps(children);
  }, []);

  return <div className="wizard-steps">{getStep(current)}</div>;
};

export default Steps;
