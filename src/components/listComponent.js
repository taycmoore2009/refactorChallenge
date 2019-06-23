import React, { Component } from "react";
import TodoListItem from './listItemComponent.js'

class TodoList extends Component {

  /**
   * create updated list with individual item done status updted
   * itemIndex {number}
   */
  markTodoDone = (itemIndex) => {
    const todoItems = this.props.items;
    const todo = todoItems[itemIndex];

    todoItems.splice(itemIndex, 1);

    todo.done = !todo.done;
    todo.done ? todoItems.push(todo) : todoItems.unshift(todo);

    this.props.updateList(todoItems);
  }

  /**
   * create updated list with item removed based on index
   * itemIndex {number}
   */
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