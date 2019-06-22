import React, { Component } from "react";
import jquery from 'jquery';
const $ = window.$ = window.jQuery = jquery;

class TodoForm extends Component {
    constructor(props) {
      super(props);
      this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount() {
      $("#itemName").focus();
    }
    onSubmit(event) {
      event.preventDefault();
      var newItemValue = $("#itemName").val();
  
      if (newItemValue) {
        this.props.addItem({ newItemValue });
        $('#todoForm').trigger("reset");
      }
    }
    render() {
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