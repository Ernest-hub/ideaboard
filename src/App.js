import React, {Component} from 'react'
import './App.css'
import IdeaContainer from './components/IdeasContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Idea Board</h1>
        </div>
          <IdeaContainer />
      </div>
    );
  }
}

export default App 

