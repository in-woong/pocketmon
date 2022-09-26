import { useState } from 'react';
import MainContainer from '../containers/MainContainer';
import img1 from '../lib/img/pikachu.png';
import img2 from '../lib/img/leezamong.png';
import SubContainer from '../containers/SubContainer';
import CoinContainer from '../containers/CoinContainer';

const MainPage = () => {
  const [coin, setCoin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const first = JSON.parse(localStorage.getItem('first'));
  const second = JSON.parse(localStorage.getItem('second'));
  return (
    <div className='artboard bg-slate-400'>
      <SubContainer
        name={first.name}
        hp={first.health}
        img={img1}
        setIsLoading={setIsLoading}
        setCoin={setCoin}
      />
      <MainContainer
        name={second.name}
        hp={second.health}
        img={img2}
        setIsLoading={setIsLoading}
        setCoin={setCoin}
      />
      <CoinContainer isLoading={isLoading} coin={coin} />
    </div>
  );
};

export default MainPage;
