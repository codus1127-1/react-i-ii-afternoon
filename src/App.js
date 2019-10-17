import React, {Component} from 'react';
import './App.css';

import Display from './components/Display'
import Navigation from './components/Navigation'

import data from './data'

class App extends Component {
  constructor() {
    super()
    this.state={
      id: 1
    }


  }

  previous = () => {
    this.setState({id: this.state.id-1})
  }
  next = () => {
    this.setState({id: this.state.id+1})
  }

  render() {
    return (
      <div className="App">

        <Display user={data.find((user, i, arr) => {
          return user.id === this.state.id
        })} />
        <Navigation previous={this.previous} next={this.next}/>

      </div>
    );
  }
}

export default App;
