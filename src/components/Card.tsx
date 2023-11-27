import { useCallback } from 'react';
import '../styles/Card.scss';
import { useAppState } from '../state.tsx';

interface CardProps {
  image: string;
  title: string;
  price: number;
  periodicity: string;
  active?: boolean;
}

const Card = ({image, title, price, periodicity, active}: CardProps) => {
  // @ts-ignore
  const [state, setState] = useAppState();

  const handleClick = () => {
    setState({...state, plan: title.toLowerCase()});
  };

  const calculatePrice = useCallback(() => {
    if (periodicity === 'yearly') return price * 10;
    return price;
  }, []);

  const displayPeriodicity = useCallback(() => {
    if (periodicity === 'yearly') return 'yr';
    return 'mo';
  }, []);

  return (
    <div className={`card-container ${active && 'active'}`} onClick={handleClick}>
      <img src={image} alt={`Logo of ${title}`} />
      <div className={'card-info-container'}>
        <span className={'card-title'}>{title}</span>
        <span className={'card-price'}>${calculatePrice()}/{displayPeriodicity()}</span>
      </div>
    </div>
  );
};

export default Card;
