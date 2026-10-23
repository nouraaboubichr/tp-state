import { useState } from 'react';

function FormulaireNom() {
  const [nom, setNom] = useState('');

  const handleChange = (event) => {
    setNom(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Bonjour, ${nom} !`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nom :{' '}
        <input type="text" value={nom} onChange={handleChange} />
      </label>{' '}
      <button type="submit">Valider</button>
    </form>
  );
}

export default FormulaireNom;