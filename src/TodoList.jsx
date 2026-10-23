import { useState, useEffect } from 'react';

function TodoList() {
  const [taches, setTaches] = useState([]);
  const [nouvelleTache, setNouvelleTache] = useState('');

  // Effet : affiche le nombre de tâches dans le titre de l'onglet
  useEffect(() => {
    document.title = `Tâches (${taches.length})`;
  }, [taches]);

  const ajouterTache = (e) => {
    e.preventDefault();
    if (nouvelleTache.trim()) {
      setTaches([...taches, { id: Date.now(), texte: nouvelleTache.trim() }]);
      setNouvelleTache('');
    }
  };

  const supprimerTache = (id) => {
    setTaches(taches.filter((t) => t.id !== id));
  };

  return (
    <div>
      <form onSubmit={ajouterTache}>
        <input
          value={nouvelleTache}
          onChange={(e) => setNouvelleTache(e.target.value)}
          placeholder="Nouvelle tâche"
        />{' '}
        <button type="submit">Ajouter</button>
      </form>
      <ul>
        {taches.map((t) => (
          <li key={t.id}>
            {t.texte} <button onClick={() => supprimerTache(t.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;