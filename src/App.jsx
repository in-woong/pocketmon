import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SetName from './pages/SetName';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<SetName name='first' />} />
        <Route path='/second' element={<SetName name='second' />} />
        <Route path='/game' element={<MainPage />} />
      </Routes>
    </div>
  );
};

export default App;
