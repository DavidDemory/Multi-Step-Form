import { StepLayout } from './Form.tsx';
import { stateType, useAppState } from '../state.tsx';
import { useForm } from 'react-hook-form';
import Input from './Input.tsx';

interface FirstFormStepProps {
  handleNextStep: () => void;
}

const FirstFormStep = ({handleNextStep}: FirstFormStepProps) => {
  // @ts-ignore
  const [state, setState] = useAppState();
  const {
    handleSubmit,
    register,
    formState: {errors},
  } = useForm({defaultValues: state, mode: 'onSubmit'});

  const saveData = (data: Partial<stateType>) => {
    setState({...state, ...data});
    handleNextStep();
  };

  return (
    <StepLayout title={'Personal info'} subtitle={'Please provide you name, email address and phone number.'}>
      <form onSubmit={handleSubmit(saveData)} className={'basic-form-container'}>
        <div className={'inputs-container'}>
          <Input label={'Name'} name={'name'} error={errors?.name}>
            <input placeholder={'eg. Stephen King'}
                   type="text" {...register('name', {required: 'This field is required'})}
                   className={errors?.name && 'input-error'} />
          </Input>
          <Input label={'Email'} name={'email'} error={errors?.email}>
            <input placeholder={'e.g. stephenking@lorem.com'}
                   type="email" {...register('email', {required: 'This field is required'})}
                   className={errors?.name && 'input-error'} />
          </Input>
          <Input label={'Phone Number'} name={'phone'} error={errors?.phone}>
            <input placeholder={'e.g. +33 7 98 12 45 28'}
                   type="tel" {...register('phone', {required: 'This field is required'})}
                   className={errors?.name && 'input-error'} />
          </Input>
        </div>
        <button type={'submit'}>Next Step</button>
      </form>
    </StepLayout>
  );
};

export default FirstFormStep;
