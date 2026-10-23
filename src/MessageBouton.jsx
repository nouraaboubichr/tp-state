import { useState } from 'react';

function MessageBouton() {
  const [message, setMessage] = useState('Cliquez sur le bouton');
  const [clics, setClics] = useState(0);

  const changerMessage = () => {
    const nouveauxMessages = ['Premier clic', 'Deuxième clic', 'Troisième clic'];
    setMessage(nouveauxMessages[clics % nouveauxMessages.length]);
    setClics((prev) => prev + 1);
  };

  return (
    <div>
      <p>{message}</p>
      <p>Nombre de clics : {clics}</p>
      <button onClick={changerMessage}>Changer</button>
    </div>
  );
}

export default MessageBouton;