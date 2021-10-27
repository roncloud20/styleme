import './App.css';
import nifemi from './nifemi.jpeg';  

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
        <div className="Card" style={{ backgroundImage:`url(${nifemi})` }}>
          <li className="Likes"><span>&hearts;</span> 888</li>
          <li className="Add"><button>+ Use</button> </li>
          <li className="Style-name">Style name</li>
        </div>
      </main>
    </div>
  );
}

export default App;
