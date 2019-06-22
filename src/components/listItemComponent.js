import React, { Component } from "react";

class TodoListItem extends Component {
    onClickClose = () => {
      const index = this.props.index;
      this.props.removeItem(index);
    }
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