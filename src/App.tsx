import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.tsx';
import { AppProvider } from './state.tsx';

function App () {

  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </AppProvider>
  );
}

export default App;
