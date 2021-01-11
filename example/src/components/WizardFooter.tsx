import { useWizard } from '../../../';

const WizardFooter = () => {
  const { next, previous } = useWizard();

  return (
    <footer className="footer">
      <button type="button" onClick={previous}>
        Previous
      </button>

      <button type="button" onClick={next}>
        Next
      </button>
    </footer>
  );
};

export default WizardFooter;
