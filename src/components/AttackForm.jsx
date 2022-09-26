const AttackForm = ({ handleSubmit, handleChange, attack }) => {
  return (
    <form action='submit' onSubmit={handleSubmit}>
      <input className='input' onChange={handleChange} value={attack} />
      <button className='btn'>attack</button>
    </form>
  );
};
export default AttackForm;
