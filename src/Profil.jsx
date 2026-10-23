import { useState } from 'react';

function Profil() {
  const [user, setUser] = useState({
    nom: 'Jean',
    age: 25,
    ville: 'Paris',
  });

  const handleChange = (field, value) => {
    setUser((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div>
      <input
        value={user.nom}
        onChange={(e) => handleChange('nom', e.target.value)}
      />{' '}
      <input
        type="number"
        value={user.age}
        onChange={(e) => handleChange('age', Number(e.target.value))}
      />{' '}
      <input
        value={user.ville}
        onChange={(e) => handleChange('ville', e.target.value)}
      />
      <p>
        {user.nom}, {user.age} ans, à {user.ville}
      </p>
    </div>
  );
}

export default Profil;