import React, { Component } from "react";
import TodoListItem from './listItemComponent.js'

class TodoList extends Component {

  markTodoDone = (itemIndex) => {
    const todoItems = this.props.items;
    const todo = todoItems[itemIndex];

    todoItems.splice(itemIndex, 1);

    todo.done = !todo.done;
    todo.done ? todoItems.push(todo) : todoItems.unshift(todo);

    this.props.updateList(todoItems);
  }

  removeItem = (itemIndex) => {
    const todoItems = this.props.items;

    todoItems.splice(itemIndex, 1);

    this.props.updateList(todoItems);
  }

  render = () => {
      var items = this.props.items.map((item, index) => {
        return (
          <TodoListItem
            item={item}
            index={index}
            removeItem={this.removeItem}
            markTodoDone={this.markTodoDone}
          />
        );
      });
    return <ul className="list-group"> {items} </ul>;
  }
}

export default TodoList;