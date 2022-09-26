import { useState } from 'react';
import AttackForm from '../components/AttackForm';
import Card from '../components/Card';
import EnergyController from '../components/EnergyController';

const MainContainer = ({ img, setIsLoading, setCoin }) => {
  const [health, setHealth] = useState(0);
  const [attack, setAttack] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newHealth = health - attack;
    if (newHealth <= 0) {
      alert('사망하였습니다');
      setAttack(0);
      return;
    }
    setHealth(health - attack);
  };
  const handleChange = (event) => {
    const { value } = event.target;
    const onlyNumber = value.replace(/[^0-9]/g, '');
    setAttack(onlyNumber);
  };

  const [gotEnergyNum, setGotEnergyNum] = useState(0);
  const handleNum = (e) => {
    console.log(e.target.value);
    setGotEnergyNum(e.target.value);
  };

  const PlusEnergy = () => {
    const newEnergyNum = Number(gotEnergyNum) + 1;
    if (newEnergyNum > 5) return;
    setGotEnergyNum(newEnergyNum.toString());
    console.log(gotEnergyNum);
  };

  const MinusEnergy = () => {
    const newEnergyNum = Number(gotEnergyNum) - 1;
    if (newEnergyNum < 0) return;
    setGotEnergyNum(newEnergyNum.toString());
    console.log(gotEnergyNum);
  };

  const getRandom = (min, max) => Math.random() * (max - min) + min;

  const handleRandom = () => {
    const random = Math.floor(getRandom(0, 2));
    console.log('random', random);
    setIsLoading(true);
    setTimeout(() => {
      if (random) {
        console.log('false');
        setCoin(false);
      } else {
        console.log('true');
        setCoin(true);
      }
      setIsLoading(false);
    }, 2000);
  };
  return (
    <div className='p-2 min-w-full bg-slate-400'>
      <Card
        img={img}
        health={health}
        handleNum={handleNum}
        num={gotEnergyNum}
      />
      <AttackForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        attack={attack}
      />
      <EnergyController
        PlusEnergy={PlusEnergy}
        MinusEnergy={MinusEnergy}
        handleRandom={handleRandom}
      />
    </div>
  );
};

export default MainContainer;
