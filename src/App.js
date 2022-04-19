import React, { Component } from 'react';
import './App.css';
import CardList from './CardList';
import { styles } from './styles';
import SearchBox from './SearchBox';
import { FaUserCircle} from 'react-icons/fa';

class App extends Component {
  constructor() {
    super()
    this.state = {
      styles: styles,
      searhfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }
  
  render() {
    const filteredStyles = this.state.styles.filter(styles =>{
      return styles.stylename.toLowerCase().includes(this.state.searhfield.toLowerCase())
    })
    return (
      <div className="App">
        <header>
          <span>style me</span>
          <SearchBox searchChange={this.onSearchChange} />
          {/* <nav>
            <li><a href="#women" placeholder="women">women</a></li>
            <li><a href="#men" placeholder="men">men</a></li>
            <li><a href="#babies" placeholder="babies">babies</a></li>
            <li><a href="#teens" placeholder="teens">teens</a></li>
            <li><a href="#senior-citizens" placeholder="senior citizen">senior citizen</a></li>
            <li><a href="#couples" placeholder="couples">couples</a></li>
            <li><a href="#families" placeholder="families">families</a></li>
            <li><a href="#asoebi" placeholder="asoebi">asoebi</a></li>
          </nav> */}
          <div>
            <FaUserCircle size={'25px'}/>
          </div>
        </header>
        <main>
          <CardList styles={filteredStyles} />
        </main>
      </div>
    );
  }
}

export default App;
