import { useState } from 'react';

function Compteur() {
  const [compte, setCompte] = useState(0);

  const incrementer = () => setCompte((prev) => prev + 1);
  const decrementer = () => setCompte((prev) => Math.max(0, prev - 1));
  const reset = () => setCompte(0);

  return (
    <div className="compteur">
      <h3>Compteur : {compte}</h3>
      <button onClick={decrementer}>-</button>
      <button onClick={incrementer}>+</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Compteur;