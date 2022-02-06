import {Component} from 'react'
import Table from './Table'
import Form from "./Form";

class App extends Component {
  state = {
    characters: []
  }

  removeCharacter = (index) => {
    const {characters} = this.state

    this.setState({
      characters: characters.filter((characters, i) => {
        return i !== index
      })
    })
  }

  handleSubmit = (character) => {
    this.setState({characters: [...this.state.characters, character]})
  }

  render() {
    const characters = []

    return (
      <div className="container">
        <Form handleSubmit={this.handleSubmit}/>
        <Table characterData={this.state.characters} removeCharacter={this.removeCharacter}/>
      </div>
    )
  }
}

export default App
