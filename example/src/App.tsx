import { Wizard, Steps, Header } from '../../';

import PersonalData from './steps/PersonalData';
import AddressData from './steps/AddressData';
import FinishData from './steps/FinishData';

import WizardFooter from './components/WizardFooter';

import './index.css';

const App = () => (
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
        <Steps>
          <PersonalData />
          <AddressData />
          <FinishData />
        </Steps>

        <WizardFooter />
      </div>
    </Wizard>
  </div>
);

export default App;
