const Rating = ({ num, handleNum }) => {
  return (
    <div className='rating gap-1'>
      <input
        type='radio'
        name='rating'
        value='1'
        className='mask mask-heart bg-red-400'
        checked={num === '1'}
        onChange={handleNum}
      />
      <input
        type='radio'
        name='rating'
        value='2'
        className='mask mask-heart bg-orange-400'
        checked={num === '2'}
        onChange={handleNum}
      />
      <input
        type='radio'
        name='rating'
        value='3'
        className='mask mask-heart bg-yellow-400'
        checked={num === '3'}
        onChange={handleNum}
      />
      <input
        type='radio'
        name='rating'
        value='4'
        className='mask mask-heart bg-lime-400'
        checked={num === '4'}
        onChange={handleNum}
      />
      <input
        type='radio'
        name='rating'
        value='5'
        className='mask mask-heart bg-green-400'
        checked={num === '5'}
        onChange={handleNum}
      />
    </div>
  );
};

export default Rating;
