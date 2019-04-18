import React, { Component } from "react";
import store, { REMOVE_ITEM, UPDATE_ITEM } from "./store";

class Item extends Component {
  state = {
    todoItems: store.getState().todoItems,
    newText: ""
  };
  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        todoItems: store.getState().todoItems
      });
    });
  }
  handleDelete = this.handleDelete.bind(this);
  handleClicker = this.handleClicker.bind(this);

  handleClicker(event) {
    store.dispatch({
      type: UPDATE_ITEM,
      payload: {
        newText: event.target.value
      }
    });
  }

  handleDelete(index) {
    store.dispatch({
      type: REMOVE_ITEM,
      payload: index
    });
  }
  handleChanger = e => {
    this.setState({ newText: e.target.value });
  };
  render() {
    console.log(this.state.newText);
    return (
      <div>
        <h1>{this.props.text}</h1>
        <div className="delete">
          <button
            onClick={i => {
              this.props.handleDelete(1);
            }}
          >
            Delete
          </button>
          {this.state.todoItems.length > 0 ? (
            <input onChange={this.handleChanger} />
          ) : null}
          <button onClick={this.handleClicker}> Edit</button>
        </div>
      </div>
    );
  }
}

export default Item;
