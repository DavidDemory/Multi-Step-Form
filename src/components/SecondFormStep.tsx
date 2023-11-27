import { useAppState } from '../state.tsx';
import { StepLayout } from './Form.tsx';
import Card from './Card.tsx';
import arcadeImage from '../assets/images/icon-arcade.svg';
import advancedImage from '../assets/images/icon-advanced.svg';
import proImage from '../assets/images/icon-pro.svg';

interface SecondFormStepProps {
  handlePrevStep: () => void;
  handleNextStep: () => void;
}

const SecondFormStep = ({handlePrevStep, handleNextStep}: SecondFormStepProps) => {
  // @ts-ignore
  const [state, setState] = useAppState();

  return (
    <StepLayout title={'Select your plan'} subtitle={'You have the option of monthly or yearly billing.'}>
      <form className={'basic-form-container'}>
        <div className="cards-container">
          <Card image={arcadeImage} title={'Arcade'} price={9} periodicity={'monthly'}
                active={state.plan === 'arcade'} />
          <Card image={advancedImage} title={'Advanced'} price={12} periodicity={'monthly'}
                active={state.plan === 'advanced'} />
          <Card image={proImage} title={'Pro'} price={15} periodicity={'monthly'} active={state.plan === 'pro'} />
        </div>
      </form>
      <div className={'button-container'}>
        <button onClick={handlePrevStep}>Go back</button>
        <button onClick={handleNextStep}>Next Step</button>
      </div>
    </StepLayout>
  );
};

export default SecondFormStep;
