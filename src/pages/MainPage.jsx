import { useState } from 'react';
import Card from '../components/Card';
import Coin from '../components/Coin';
import CoinLoading from '../components/CoinLoading';
import MainContainer from '../containers/MainContainer';
import img1 from '../lib/img/pikachu.png';
import img2 from '../lib/img/leezamong.png';

const MainPage = () => {
  const [coin, setCoin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className='artboard phone-3 bg-slate-400'>
      <MainContainer img={img1} setIsLoading={setIsLoading} setCoin={setCoin} />
      {isLoading ? <CoinLoading /> : <Coin coin={coin} />}
      <MainContainer img={img2} setIsLoading={setIsLoading} setCoin={setCoin} />
    </div>
  );
};

export default MainPage;
