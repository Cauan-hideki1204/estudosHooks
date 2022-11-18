import React, { useState, useEffect } from 'react';

const Example = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Você clicou ${count} vezes`);
  }, [count]);
  // o trecho de código dentro do useEffect será renderizado
  // toda vez que o count for alterado

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>
        Clique aqui
      </button>
    </div>
  );
}

export default Example