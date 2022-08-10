import { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('안녕');
  const onClickLeave = () => setMessage('잘가');

  const [color, setColor] = useState('black');

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>톼장</button>
      <h1>{message}</h1>
    </div>
  );
};

export default Say;
