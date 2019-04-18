import React, { Component } from "react";
import store, { REMOVE_ITEM } from "./store";
import Item from "./item";

class List extends Component {
  state = {
    todoItems: store.getState().todoItems
  };
  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        todoItems: store.getState().todoItems
      });
    });
  }
  handleDelete(index) {
    store.dispatch({
      type: REMOVE_ITEM,
      index
    });
  }

  render() {
    console.log(this.state.todoItems);

    return (
      <div>
        {this.state.todoItems.map(val => {
          return <Item text={val} handleDelete={this.handleDelete} />;
        })}
      </div>
    );
  }
}

export default List;
