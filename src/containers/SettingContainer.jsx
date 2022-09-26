import { useState } from 'react';
import { Link } from 'react-router-dom';
const SettingContainer = ({ name: page }) => {
  const [name, setName] = useState('');
  const [health, setHealth] = useState('');
  const nameChange = (e) => {
    setName(e.target.value);
  };
  const healthChange = (e) => {
    setHealth(e.target.value);
  };
  const onSubmit = (e) => {
    const temp = { name, health };
    localStorage.setItem(page, JSON.stringify(temp));
    setName('');
    setHealth('');
  };
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-4xl py-6 font-bold'>what's your name?</h1>
          <input
            value={name}
            onChange={nameChange}
            className=' input py-6'
            placeholder='helloman'
          ></input>
          <h1 className='text-4xl py-6 font-bold'>what's your full hp?</h1>
          <input
            value={health}
            onChange={healthChange}
            className='input py-6'
            placeholder='1800'
          ></input>
          <Link
            onClick={onSubmit}
            to={page === 'first' ? '/second' : '/game'}
            className='btn btn-block mt-10 btn-primary'
          >
            {page === 'first' ? 'next Page' : 'Get Started'}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SettingContainer;
