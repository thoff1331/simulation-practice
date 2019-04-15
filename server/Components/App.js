import React, { Component } from "react";
import "./App.css";
import Form from "./Components/Form";
import Courses from "./Components/Courses";
import axios from "axios";
import { HashRouter, Link } from "react-router-dom";
import routes from "./Components/routes";
class App extends Component {
  constructor() {
    super();
    this.state = {
      courseList: []
    };
  }
  componentDidMount() {
    axios.get("/api/course").then(res => {
      this.setState({
        courseList: res.data,
        edit: false
      });
    });
  }
  updateCourse(id) {
    axios
      .put(`/api/course/${id}`)
      .then(res => {
        this.setState({
          courseList: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const courses = this.state.courseList.map((course, i) => {
      return (
        <Courses
          key={i}
          id={course.course_id}
          Name={course.name}
          City={course.city}
          Handicap={course.handicap}
          FavoriteGolfCourse={course.favecourse}
          deleteCourse={() =>
            axios
              .delete(`/api/course/${course.course_id}`)
              .then(res => {
                window.location.reload();
              })
              .catch(err => console.log(err))
          }
          updateCourse={this.updateCourse}
        />
      );
    });
    return (
      <div>
        <div>
          <HashRouter>
            <div>
              <div />
              <nav>
                <div className="title">Golfing Guru's</div>
                <div className="links">
                  <Link to="/">Home</Link>
                  <br />
                  <Link to="/USCourses">Us Courses</Link>
                  <br />
                  <Link to="/UkCourses">Uk Courses</Link>
                  <br />
                </div>
              </nav>
              {routes}
            </div>
          </HashRouter>
        </div>
        <div> {courses}</div>
      </div>
    );
  }
}

export default App;
