import React, { Component } from "react";
import Axios from "axios";

class Courses extends Component {
  constructor(props) {
    super();
    this.state = {
      inputField: false
    };
  }

  render() {
    const { Name, City, Handicap, FavoriteGolfCourse } = this.props;
    console.log(this.props.handlEdit);
    return (
      <div className="course">
        <h3>{Name}</h3>
        <button>Contact</button>
        <p>{City}</p>
        <button onClick={this.props.handlEdit}>Edit</button>
        <p>{Handicap}</p>
        <button onClick={this.props.deleteCourse}>Delete</button>
        <p>{FavoriteGolfCourse}</p>
      </div>
    );
  }
}
export default Courses;
