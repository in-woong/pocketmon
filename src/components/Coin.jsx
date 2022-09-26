const Coin = ({ coin }) => {
  return (
    <>
      {coin ? (
        <button className='btn btn-warning btn-lg btn-circle'>앞면</button>
      ) : (
        <button className='btn  btn-warning btn-lg btn-circle'>뒷면</button>
      )}
    </>
  );
};
export default Coin;
