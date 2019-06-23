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

  /**
   * Add new item to begining of todoItems list
   * todoItem {object:todoItem}
   */
  addItem = (todoItem) => {
    const todoItems = this.state.todoItems;
    todoItems.unshift(todoItem);

    this.setState({ todoItems: todoItems });
  }

  /**
   * Update todoItems list with a new list
   * todoItems {array}
   */
  updateList = (todoItems) => {
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
          updateList={this.updateList}
        />
        <TodoForm 
          addItem={this.addItem}
        />
      </div>
    );
  }
}

export default TodoApp;
