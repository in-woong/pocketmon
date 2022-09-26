import Rating from './common/Rating';

const Card = ({ img, name = 'text', health = 0, handleNum, num }) => {
  return (
    <div className='mx-auto card card-compact w-1/3 bg-base-100 shadow-xl'>
      <figure>
        <img src={img} alt='Shoes' />
      </figure>
      <div className='card-body'>
        <div className='flex justify-between align-middle'>
          <h2 className='card-title'>{name}</h2>
          <div className='badge text-xl'>{health}</div>
        </div>
        <Rating num={num} handleNum={handleNum} />
      </div>
    </div>
  );
};
export default Card;
