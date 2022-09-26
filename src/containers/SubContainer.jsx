import { useState } from 'react';
import AttackForm from '../components/AttackForm';
import Card from '../components/Card';
import EnergyController from '../components/EnergyController';

const SubContainer = ({ img, name, hp, setIsLoading, isLoading, setCoin }) => {
  const [health, setHealth] = useState(hp);
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
    setGotEnergyNum(e.target.value);
  };

  const PlusEnergy = () => {
    const newEnergyNum = Number(gotEnergyNum) + 1;
    if (newEnergyNum > 5) {
      setGotEnergyNum((newEnergyNum % 5).toString());
      return;
    }
    setGotEnergyNum(newEnergyNum.toString());
  };

  const MinusEnergy = () => {
    const newEnergyNum = Number(gotEnergyNum) - 1;
    if (newEnergyNum < 0) {
      setGotEnergyNum((newEnergyNum % 5).toString());
      return;
    }
    setGotEnergyNum(newEnergyNum.toString());
  };
  const getRandom = (min, max) => Math.random() * (max - min) + min;

  const handleRandom = () => {
    const random = Math.floor(getRandom(0, 2));
    if (isLoading) return;
    setIsLoading(true);
    setTimeout(() => {
      if (random) {
        setCoin(true);
      } else {
        setCoin(false);
      }
      setIsLoading(false);
    }, 2000);
  };
  return (
    <div className='p-2 rotate-180 h-1/2 min-w-full bg-slate-400'>
      <Card
        name={name}
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

export default SubContainer;
