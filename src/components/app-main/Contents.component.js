import React, { Component } from 'react';
import '../../App.css';
import Questions from '../../data/mcq_questions';
import Question from "../app-main/Question.component";

class Contents extends Component {
    constructor(props){
        super(props);
        this.state={
            questions : Questions.questions,
            current : 1,
            score:0,
        }
    }
    
  setScore(score) {
    this.setState({ score });
  }

  setCurrent(current) {
    this.setState({ current });
  }

  newQuiz(e) {
    e.preventDefault();
    this.setState({
      score: 0,
      current: 1
    });
  }

  render() {
    const Ques = this.state.questions;
    const cur =this.state.current;
    const score = this.state.score;
    var display, result;

    let result1;

    if (cur > Ques.length) {
      if (score > 4) {
        result1 = (
          <div className="alert alert-success">
            <h2>Congratulations !!!</h2>
            <h3>
              You have scored {score} out of {Ques.length}{" "}
            </h3>
          </div>
        );
      } else {
        result1 = (
          <div className="alert alert-danger">
            <h2>Failed</h2>
            <h3>
              You have scored {score} out of {Ques.length}{" "}
            </h3>
          </div>
        );
      }
    }

    if (cur < Ques.length) {
      display = <h4><p className="card">
                    {" "}
                    Question <b>{cur}</b> out of{" "}
                    <b>{Ques.length}</b>
                </p></h4>;
      result = "";
    }else {
        display = "";
        result = <div>
            {result1}
            {cur > Ques.length && (
            <button className="btn btn-primary" onClick={this.newQuiz}>
                Retry Quiz
            </button>
            )};
        </div>
    }


    return (
      <div className="App">
        {display}
        {Ques.map(question => {
            if (question.id === cur) {
                return (
                    <Question 
                        {...this.state} 
                        question={question} 
                        key={question.id} 
                        setScore={this.setScore.bind(this)}
                        setCurrent={this.setCurrent.bind(this)}
                    />
                );
            }
        })}
        {result1}
      </div>
    );
  }
}

export default Contents;
