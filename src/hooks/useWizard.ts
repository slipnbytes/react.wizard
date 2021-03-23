import { useContext } from 'react';

import { WizardContext } from '../Context';
import type { WizardContextData } from '../types';

export const useWizard = (): WizardContextData => useContext(WizardContext);
