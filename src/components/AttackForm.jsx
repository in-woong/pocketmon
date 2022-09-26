const AttackForm = ({ handleSubmit, handleChange, attack }) => {
  return (
    <form className='my-5' action='submit' onSubmit={handleSubmit}>
      <input
        className='input input-sm min-w-1/5'
        onChange={handleChange}
        value={attack}
      />
      <button className='btn btn-sm'>attack</button>
    </form>
  );
};
export default AttackForm;
