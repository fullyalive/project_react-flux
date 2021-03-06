import React, { Component } from "react";
import ReactDOM from "react-dom";
import QuestionList from "./quiz/QuestionList.jsx.js";
import Scorebox from "./quiz/Scorebox.jsx.js";
import Results from "./quiz/Results.jsx.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          text: "What is your name?",
          choices: [
            {
              id: "a",
              text: "fullyalive"
            },
            {
              id: "b",
              text: "jay"
            },
            {
              id: "c",
              text: "Mr.Lee"
            }
          ],
          correct: "b"
        },
        {
          id: 2,
          text: "What is your elder cats name?",
          choices: [
            {
              id: "a",
              text: "kkung"
            },
            {
              id: "b",
              text: "jjong"
            },
            {
              id: "c",
              text: "ddung"
            }
          ],
          correct: "a"
        },
        {
          id: 3,
          text: "What is your younger cats name?",
          choices: [
            {
              id: "a",
              text: "kkung"
            },
            {
              id: "b",
              text: "jjong"
            },
            {
              id: "c",
              text: "ddung"
            }
          ],
          correct: "b"
        }
      ],
      score: 0,
      current: 1
    };
  }

  setCurrent(current) {
    this.setState({ current });
  }

  setScore(score) {
    this.setState({ score });
  }

  render() {
    if (this.state.current > this.state.questions.length) {
      var scorebox = "";
      var results = <Results {...this.state} />;
    } else {
      var scorebox = <Scorebox {...this.state} />;
    }
    return (
      <div>
        {scorebox}
        <QuestionList
          {...this.state}
          setCurrent={this.setCurrent.bind(this)}
          setScore={this.setScore.bind(this)}
        />
        {results}
      </div>
    );
  }
}

export default App;
