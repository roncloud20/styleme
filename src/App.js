import './App.css';
import CardList from './CardList';
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
        <CardList styles={styles} />
      </main>
    </div>
  );
}

export default App;
