import React from 'react';

import { Provider } from '../Context';
import { WizardProps } from '../types';

const Wizard = ({ children }: WizardProps): JSX.Element => (
  <Provider>{children}</Provider>
);

export default Wizard;
