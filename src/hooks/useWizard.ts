import { useContext } from 'react';

import { Context } from '../Context';
import { WizardContext } from '../types';

const useWizard = (): WizardContext => useContext(Context);

export default useWizard;
