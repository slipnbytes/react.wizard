import { mergeClassNames } from '@hitechline/reactools';
import React from 'react';

import { Provider } from '../Context';
import { WizardProps } from '../types';

const Wizard = ({
  children,
  className,
  ...props
}: WizardProps): JSX.Element => (
  <Provider>
    <div {...props} className={mergeClassNames('wizard', className)}>
      {children}
    </div>
  </Provider>
);

export default Wizard;
