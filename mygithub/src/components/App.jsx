import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import Profile from "./github/Profile.jsx";
import $ from "jquery";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "fullyalive",
      userData: [],
      userRepos: [],
      perPage: 5
    };
  }

  // Get user data from github
  getUserData() {
    $.ajax({
      url: `https://api.github.com/users/${this.state.username}?client_id=${
        this.props.clientId
      }&client_secret=${this.props.clientSecret}`,
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ userData: data });
        console.log(data);
      }.bind(this),
      error: function(xhr, status, err) {
        this.setState({ username: null });
        console.log(err);
      }.bind(this)
    });
  }

  // Get user repoos
  getUserRepos() {
    $.ajax({
      url: `https://api.github.com/users/${this.state.username}/repos?per_page${
        this.state.perPage
      }&client_id=${this.props.clientId}&client_secret=${
        this.props.clientSecret
      }&sort=created`,
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ userRepos: data });
        console.log(data);
      }.bind(this),
      error: function(xhr, status, err) {
        this.setState({ username: null });
        console.log(err);
      }.bind(this)
    });
  }

  componentDidMount() {
    this.getUserData();
    this.getUserRepos();
  }

  render() {
    return (
      <div>
        <Profile {...this.state} />
      </div>
    );
  }
}

App.propTypes = {
  clientId: PropTypes.string,
  clientSecret: PropTypes.string
};

App.defaultProps = {
  clientId: "370e5b8fc332bc3c6dcd",
  clientSecret: "65b4c5605bfd56b741bb53c39b648ac6d28ac5a7"
};

export default App;
