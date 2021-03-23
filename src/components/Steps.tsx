import { mergeClassNames } from '@hitechline/reactools';
import { useEffect } from 'react';

import { useWizard } from '../hooks/useWizard';
import type { WizardStepsProps } from '../types';

export const WizardSteps = ({
  children,
  className,
  ...props
}: WizardStepsProps): JSX.Element => {
  const { current, getStep, registerSteps } = useWizard();

  useEffect(() => {
    registerSteps(children);
  }, [children, registerSteps]);

  return (
    <div {...props} className={mergeClassNames('wizard-steps', className)}>
      {getStep(current)}
    </div>
  );
};
