import React, { Component } from 'react';
import './App.css';
import TodoItems from './TodoItems';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    }

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    const newItem = {
      text: this._inputElement.value,
      key: Date.now()
    }
    if(this._inputElement === '') {
      alert("You must write something!"); 
    } else { 
      this.setState ((prevState) =>{
        return {  
          items: prevState.items.concat(newItem)
        }
      });

      console.log(this.state);

      e.preventDefault();

      this._inputElement.value = '';
    } 
  }

  deleteItem(key) {
    const filteredItems = this.state.items.filter(function(item) {
      return (item.key !== key)
    })

    this.setState({
      items: filteredItems
    })
  }
  
  render() {
    return (
      <div className="App">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input placeholder="Enter task" ref={(a) => this._inputElement = a}/>
            <button type="submit">add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items}
        delete={this.deleteItem}/>
      </div>
    );
  }
}

export default App;
