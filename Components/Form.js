import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      nameInput: "",
      cityInput: "",
      handicapInput: "",
      courseInput: ""
    };
    this.handleCancel = this.handleCancel.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changeCity = this.changeCity.bind(this);
    this.changeCourse = this.changeCourse.bind(this);
    this.handlePost = this.handlePost.bind(this);
  }

  handleCancel() {
    this.setState({
      nameInput: "",
      cityInput: "",
      handicapInput: "",
      courseInput: ""
    });
  }
  handlePost(e) {
    e.preventDefault();
    axios
      .post("/api/course", {
        name: this.state.nameInput,
        city: this.state.cityInput,
        handicap: this.state.handicapInput,
        favecourse: this.state.courseInput
      })
      .then(res => {
        window.location.reload();
      })
      .catch(err => console.log(err));
  }

  changeName = val => this.setState({ nameInput: val });
  changeCity = val => this.setState({ cityInput: val });
  changeCourse = val => this.setState({ courseInput: val });
  changeHandicap = val => this.setState({ handicapInput: val });

  render() {
    return (
      <form className="form">
        <label> Name</label>
        <input onChange={e => this.changeName(e.target.value)} />
        <label> City</label>
        <input onChange={e => this.changeCity(e.target.value)} />
        <label>Handicap</label>
        <input onChange={e => this.changeHandicap(e.target.value)} />
        <label>Favorite Golf Course</label>
        <input onChange={e => this.changeCourse(e.target.value)} />
        <button onClick={this.handleCancel}>Clear Fields</button>
        <button type="submit" onClick={this.handlePost}>
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
