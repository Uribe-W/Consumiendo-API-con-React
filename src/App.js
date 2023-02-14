import React, { Component } from 'react';
import './App.css';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        this.setState({ todos: data });
      });
  }

  render() {
    return (
      <div>
        <h1>Lista de tareas</h1>
        <ul className="todo-list">
          {this.state.todos.map(todo => (
            <li key={todo.id}>
              <div className="todo-item">
                <div className="todo-id">{todo.id}</div>
                <div className="todo-title">{todo.title}</div>
                <div className="todo-status">{todo.completed ? 'Completado' : 'Pendiente'}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserList;