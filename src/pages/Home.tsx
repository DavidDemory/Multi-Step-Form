import '../styles/Home.scss';
import Form from '../components/Form.tsx';

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
