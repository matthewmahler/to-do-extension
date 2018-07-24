import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    todos: [],
    idCount: 0
  }

    addTodo(todoName){
      this.setState(prevState => {
        const newTodos = prevState.todos.slice().concat({
          name: todoName,
          id: prevState.idCount
        })
        return {
          todos: newTodos,
          idCount: prevState.idCount + 1
        }
      })
    }

    deleteTodo(todoId){
      this.setState(prevState => {
        const newTodos = prevState.todos.slice().filter(todo => (todo.id !== todoId))
        return{
          todos: newTodos
        }
      })

    }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default App;
