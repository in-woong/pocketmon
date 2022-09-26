const EnergyController = ({ PlusEnergy, MinusEnergy }) => {
  return (
    <div>
      <div>
        <button className='btn btn-circle text-2xl' onClick={PlusEnergy}>
          +
        </button>
        <button className='btn btn-circle text-2xl' onClick={MinusEnergy}>
          -
        </button>
      </div>
    </div>
  );
};

export default EnergyController;
