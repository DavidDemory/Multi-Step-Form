import '../styles/Form.scss';
import StepButton from './StepButton.tsx';
import React, { ChangeEvent, useReducer } from 'react';

interface formDataType {
  name: string,
  email: string
  phone: string,
  plan: 'arcade' | 'advanced' | 'pro',
  periodicity: 'monthly' | 'yearly',
  addons: Array<string>,
  price: number
}

interface stateType {
  currentStep: number,
  formData: formDataType,
}

interface actionType {
  type: string,
  name: string,
  value: string,
}

const initialState: stateType = {
  currentStep: 1,
  formData: {
    name: '',
    email: '',
    phone: '',
    plan: 'arcade',
    periodicity: 'monthly',
    addons: [],
    price: 0,
  },
};

interface stepLayoutType {
  title: string,
  subtitle: string,
  children: React.ReactNode,
}

const StepLayout = ({title, subtitle, children}: stepLayoutType) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      {children}
    </div>
  );
};

const FirsStepForm = () => {
  return (
    <StepLayout title={'First Step'} subtitle={'I am the First Step'}>
      <input type="text" placeholder={'test'} />
    </StepLayout>
  );
};

const reducer = (state: stateType, action: Partial<actionType>) => {
  if (action.type === 'next_step') {
    return {...state, currentStep: state.currentStep + 1};
  } else if (action.type === 'prev_step') {
    return {...state, currentStep: state.currentStep - 1};
  } else if (action.type === 'change' && action.name) {
    return {...state, formData: {...state.formData, [action.name]: action.value}};
  } else return state;
};


const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handlePrevStep = () => dispatch({type: 'prev_step'});
  const handleNextStep = () => dispatch({type: 'next_step'});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => dispatch({
    type: 'change',
    name: e.target.name,
    value: e.target.value,
  });

  const buttonsSubtitle = ['Your Info', 'Select Plan', 'Add-ons', 'Summary'];

  return (
    <div className={'container'}>
      <div className={'form-container'}>
        <div className={'left-part'}>
          {buttonsSubtitle.map((subtitle, index) => {
            return <StepButton number={index + 1} subTitle={subtitle} active={state.currentStep === index + 1} />;
          })}
        </div>
        <div className={'right-part'}>
          {state.currentStep === 1 && <FirsStepForm />}
          <footer>
            {state.currentStep > 0 && <button onClick={handlePrevStep}>Go back</button>}
            {state.currentStep < buttonsSubtitle.length && <button onClick={handleNextStep}>Next step</button>}
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Form;
