import './App.css';
import Card from './Card.js';
import { styles } from './styles.js';

function App() {
  return (
    <div className="App">
      <header>
        <div>
          Style Me
        </div>
        <div>
          <input type="text" placeholder="Search for styles" />
        </div>
        <nav>
          <li><a href="#women" placeholder="women">women</a></li>
          <li><a href="#men" placeholder="men">men</a></li>
          <li><a href="#babies" placeholder="babies">babies</a></li>
          <li><a href="#teens" placeholder="teens">teens</a></li>
          <li><a href="#senior-citizens" placeholder="senior citizen">senior citizen</a></li>
          <li><a href="#couples" placeholder="couples">couples</a></li>
          <li><a href="#families" placeholder="families">families</a></li>
          <li><a href="#asoebi" placeholder="asoebi">asoebi</a></li>
        </nav>
      </header>
      <main>
        <Card id={styles[0].id} styleName={styles[0].styleName} category={styles[0].category} likes={styles[0].likes} imageUrl={styles[0].imageUrl} />
        <Card id={styles[1].id} styleName={styles[1].styleName} category={styles[1].category} likes={styles[1].likes} imageUrl={styles[1].imageUrl} />
        <Card id={styles[2].id} styleName={styles[2].styleName} category={styles[2].category} likes={styles[2].likes} imageUrl={styles[2].imageUrl} />
        <Card id={styles[3].id} styleName={styles[3].styleName} category={styles[3].category} likes={styles[3].likes} imageUrl={styles[3].imageUrl} />
        <Card id={styles[4].id} styleName={styles[4].styleName} category={styles[4].category} likes={styles[4].likes} imageUrl={styles[4].imageUrl} />
      </main>
    </div>
  );
}

export default App;
