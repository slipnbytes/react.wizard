import { mergeClassNames } from '@hitechline/reactools';

import { WizardProvider } from '../Context';
import type { WizardProps } from '../types';

export const Wizard = ({
  children,
  className,
  ...props
}: WizardProps): JSX.Element => (
  <WizardProvider>
    <div {...props} className={mergeClassNames('wizard', className)}>
      {children}
    </div>
  </WizardProvider>
);
