import React, { useState } from 'react';
import '../styles/Form.scss';
import StepButton from './StepButton.tsx';
import FirstFormStep from './FirstFormStep.tsx';

interface stepLayoutType {
  title: string,
  subtitle: string,
  children: React.ReactNode,
}

export const StepLayout = ({title, subtitle, children}: stepLayoutType) => {
  return (
    <div className={'form-layout-container'}>
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      {children}
    </div>
  );
};

const Form = () => {
  const [stepCount, setStepCount] = useState<number>(1);
  const buttonsSubtitle = ['Your Info', 'Select Plan', 'Add-ons', 'Summary'];


  return (
    <div className={'container'}>
      <div className={'form-container'}>
        <div className={'left-part'}>
          {buttonsSubtitle.map((subtitle, index) => {
            return <StepButton key={index} number={index + 1} subTitle={subtitle} active={stepCount === index + 1} />;
          })}
        </div>
        <div className="right-part">
          {stepCount === 1 && <FirstFormStep handleNextStep={() => setStepCount((stepCount + 1))} />}
          {stepCount === buttonsSubtitle.length && <button type={'submit'}>Submit</button>}
        </div>
      </div>
    </div>
  );
};

export default Form;
