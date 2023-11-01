import '../styles/StepButton.scss';

interface StepButtonProps {
  number: number;
  subTitle: string;
  active: boolean;
}

const StepButton = ({number, subTitle, active}: StepButtonProps) => {
  return (
    <div className={`button-container ${active ? 'active' : null}`}>
      <span className={'num'}>{number}</span>
      <span className={'step-text'}>STEP {number}</span>
      <span className={'subtitle'}>{subTitle}</span>
    </div>
  );
};

export default StepButton;
