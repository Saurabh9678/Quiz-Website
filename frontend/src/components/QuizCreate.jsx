import React, { useState } from "react";
import "../styles/QuizCreate.css";
import "../styles/Quiz.css";

const QuizCreate = (props) => {
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [answer, setAnswer] = useState(-1);


  const onChangeQuestion = (e) => {
    props.setQuizData((prev) => {
      let newState = [...prev];
      newState.forEach((element) => {
        if(element.id===props.index){
          newState[props.index].question = e.target.value;
        }
      });
      return newState;
    });
  };

  return (
    <>
      <input
        type="text"
        className="text-field-question"
        placeholder="Enter your Question"
        value={props.quizData[props.index].question}
        onChange={onChangeQuestion}
      />
      <label className="radio-input-field">
        <input type="radio" name="answer" onChange={() => setAnswer(0)} />
        <input
          type="text"
          placeholder="Enter your answer"
          value={option1}
          onChange={(e) => setOption1(e.target.value)}
        />
      </label>
      <label className="radio-input-field">
        <input type="radio" name="answer" onChange={() => setAnswer(1)} />
        <input
          type="text"
          placeholder="Enter your answer"
          value={option2}
          onChange={(e) => setOption2(e.target.value)}
        />
      </label>
      <label className="radio-input-field">
        <input type="radio" name="answer" onChange={() => setAnswer(2)} />
        <input
          type="text"
          placeholder="Enter your answer"
          value={option3}
          onChange={(e) => setOption3(e.target.value)}
        />
      </label>
      <label className="radio-input-field">
        <input type="radio" name="answer" onChange={() => setAnswer(3)} />
        <input
          type="text"
          placeholder="Enter your answer"
          value={option4}
          onChange={(e) => setOption4(e.target.value)}
        />
      </label>
    </>
  );
};

export default QuizCreate;
