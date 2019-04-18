import React, { Component } from "react";
import store, { ADD_ITEM, UPDATE_ITEM } from "./store";
import List from "./List";

class Feature extends Component {
  state = {
    inputText: " "
  };
  handleChange = e => {
    this.setState({ inputText: e.target.value });
  };
  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        inputText: store.getState().todoItems
      });
    });
  }
  handleEdit(index, text) {
    store.dispatch({
      type: UPDATE_ITEM,
      payload: {
        index,
        text
      }
    });
  }
  handleClick = () => {
    const action = {
      type: ADD_ITEM,
      payload: this.state.inputText
    };
    store.dispatch(action);
    this.setState({
      inputText: " "
    });
  };

  render() {
    console.log(this.state.todoItems);
    return (
      <div className="form">
        <input onChange={this.handleChange} value={this.state.inputText} />
        <button onClick={this.handleClick}> Add Item </button>
        <List />
      </div>
    );
  }
}

export default Feature;
