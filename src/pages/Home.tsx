import Form from '../components/Form.tsx';
import '../styles/Home.scss';

interface HomeProps {

}

const Home = ({}: HomeProps) => {
  return (
    <div className={'home-page'}>
      <Form />
    </div>
  );
};

export default Home;
