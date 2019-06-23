import React, { Component } from "react";
import jquery from 'jquery';
import moment from "moment";

const $ = window.$ = window.jQuery = jquery;

class TodoForm extends Component {
    constructor(props) {
      super(props);
      this.onSubmit = this.onSubmit.bind(this);
    }
    
    /**
     * When the form loads, focus on input field
     */
    componentDidMount = () => {
      $("#itemName").focus();
    }

    /**
     * When form submit triggered, add new item if input isn't empty
     * event {domEvent}
     */
    onSubmit = (event) => {
      event.preventDefault();
      const newItemValue = $("#itemName").val();
  
      if (newItemValue) {
        this.props.addItem({
            value: newItemValue,
            date: moment().format("ll"),
            done: false
        });
        $('#todoForm').trigger("reset");
      }
    }
    
    render = () => {
      return (
        <form ref="form" id="todoForm" onSubmit={this.onSubmit} className="form-inline">
          <input
            type="text"
            id="itemName"
            className="form-control"
            placeholder="add a new todo..."
          />
          <button type="submit" className="btn btn-default">
            Add
          </button>
        </form>
      );
    }
}

export default TodoForm;