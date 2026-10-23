import Compteur from './Compteur';
import MessageBouton from './MessageBouton';
import FormulaireNom from './FormulaireNom';
import TodoList from './TodoList';
import Profil from './Profil';

function App() {
  return (
    <div className="container">
      <h1>TP 2 : Gestion de l'État</h1>

      <section className="bloc">
        <h2>Compteur</h2>
        <Compteur />
      </section>

      <section className="bloc">
        <h2>Interactions</h2>
        <MessageBouton />
      </section>

      <section className="bloc">
        <h2>Formulaire</h2>
        <FormulaireNom />
      </section>

      <section className="bloc">
        <h2>Liste de tâches</h2>
        <TodoList />
      </section>

      <section className="bloc">
        <h2>Profil modifiable</h2>
        <Profil />
      </section>
    </div>
  );
}

export default App;