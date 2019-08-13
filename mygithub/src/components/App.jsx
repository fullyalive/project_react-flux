import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
require("dotenv").config({ path: __dirname + "/.env" });

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

  render() {
    return (
      <div>
        {this.props.clientId}
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
