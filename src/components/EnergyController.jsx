const EnergyController = ({ PlusEnergy, MinusEnergy, handleRandom }) => {
  return (
    <div className='ml-auto max-w-fit'>
      <button
        className='btn btn-circle btn-md text-center mr-4'
        onClick={PlusEnergy}
      >
        <span className='my-auto text-xl'>+</span>
      </button>
      <button className='btn btn-circle text-2xl mr-8' onClick={MinusEnergy}>
        <span className='my-auto text-xl'>-</span>
      </button>
      <button className='btn' onClick={handleRandom}>
        Coin
      </button>
    </div>
  );
};

export default EnergyController;
