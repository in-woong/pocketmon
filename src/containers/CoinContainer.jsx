import Coin from '../components/Coin';
import CoinLoading from '../components/CoinLoading';

const CoinContainer = ({ isLoading, coin }) => {
  return (
    <div className='fixed top-1/2 left-5'>
      {isLoading ? <CoinLoading /> : <Coin coin={coin} />}
    </div>
  );
};

export default CoinContainer;
