import React, { Component } from "react";

class TodoListItem extends Component {
  /** 
   * When exit icon is clicked, remove item from list
  */
  onClickClose = () => {
    const index = this.props.index;
    this.props.removeItem(index);
  }
  /**
   * When status icon is clicked, change done statues of item
   */
  onClickDone = () => {
    const index = this.props.index;
    this.props.markTodoDone(index);
  }
  render = () => {
    const todoClass = this.props.item.done ? "todoItem done" : "todoItem undone";
    return (
      <li className="list-group-item ">
        <div className={todoClass}>
          <span
              className="glyphicon glyphicon-ok icon"
            aria-hidden="true"
            onClick={this.onClickDone}
          />
          <span>{this.props.item.value}</span>
          <span className='date'>{`Added: ${this.props.item.date}`}</span>
          <button type="button" className="close" onClick={this.onClickClose}>
            &times;
          </button>
        </div>
      </li>
    );
  }
}

export default TodoListItem;