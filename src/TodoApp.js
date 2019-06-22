import React, { Component } from "react";

import TodoList from './components/listComponent'
import TodoForm from './components/formComponent'
import Timer from './components/timerComponent'

import "./App.css";

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = { todoItems: [], showTimer: false };
  }

  addItem = (todoItem) => {
    const todoItems = this.state.todoItems;
    todoItems.unshift(todoItem);
    
    this.setState({ todoItems: todoItems });
  }

  removeItem = (itemIndex) => {
    var todoItems = this.state.todoItems;
    todoItems.splice(itemIndex, 1);
    this.setState({ todoItems: todoItems });
  }

  markTodoDone = (itemIndex) => {
    const todoItems = this.state.todoItems;
    var todo = todoItems[itemIndex];
    todoItems.splice(itemIndex, 1);
    todo.done = !todo.done;
    todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
    this.setState({ todoItems: todoItems });
  }

  render = () => {
    return (
      <div id="main">
        <h1>Todo list</h1>
        <button
          onClick={() => this.setState({ showTimer: !this.state.showTimer })}
        >
          Toggle Timer
        </button>
        {this.state.showTimer ? <Timer /> : null}
        <TodoList
          items={this.state.todoItems}
          removeItem={this.removeItem}
          markTodoDone={this.markTodoDone}
        />
        <TodoForm 
          addItem={this.addItem}
        />
      </div>
    );
  }
}

export default TodoApp;
