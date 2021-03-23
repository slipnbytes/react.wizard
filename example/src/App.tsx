import { Wizard, WizardSteps, Header } from '../..';
import { WizardFooter } from './components/WizardFooter';
import { AddressData } from './steps/AddressData';
import { FinishData } from './steps/FinishData';
import { PersonalData } from './steps/PersonalData';

import './index.css';

export const App = (): JSX.Element => (
  <div className="App">
    <Wizard>
      <Header
        custom={[
          {
            title: 'Dados pessoais',
            element: 'D',
          },
          {
            title: 'Endereço',
            element: 'E',
          },
          {
            title: 'Concluir',
            element: 'C',
          },
        ]}
      />

      <div className="content">
        <WizardSteps>
          <PersonalData />
          <AddressData />
          <FinishData />
        </WizardSteps>

        <WizardFooter />
      </div>
    </Wizard>
  </div>
);
