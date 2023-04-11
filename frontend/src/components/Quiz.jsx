import React, { useEffect, useState } from 'react';
import QuizCreate from './QuizCreate';
import "../styles/Main.css";
import "../styles/Quiz.css";

const Quiz = () => {
  const [userId, setUserId] = useState("");
  const [numQuestions, setNumQuestions] = useState(0);
  const [quizData, setQuizData] = useState([]);
  

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  const handleNumQuestionsChange = (event) => {
    setNumQuestions(event.target.value);
  };

  useEffect(() => {
    setQuizData(prev => {
      let newState = [...prev]
      for(let i = 0; i < numQuestions; i++) {
        newState.push({
          id:i,
          question:"",
          options:[],
          answer:-1
        })
      }
      return newState;
  })
  }, [numQuestions])

  // const handleQuizCreate = (questionsData) => {
  //   setQuizData((prevData) => {
  //     if (!prevData) {
  //       prevData = { userId: userId, questions: [], answers: [] };
  //     }
  //     prevData.questions.push(questionsData.question);
  //     prevData.answers.push(questionsData.answer);
  //     return prevData;
  //   });
  // };

  const handleQuizSubmit = () => {
    if (userId.length !== 6) {
      alert("User Id must be of length 6");
      return;
    }
    
    alert(`Quiz submitted successfully:\n${JSON.stringify(quizData)}`);
  };



  return (
    <>
      <div className="heading">
        <h3>Create Quiz</h3>
      </div>
      <input type="text" className='text-field-userId' placeholder='Enter a UserId' value={userId} onChange={handleUserIdChange} />
      <span className='text-field-info'>(*The user Id must be of length 6. Which you can share with others)</span>

      <span className='text-no-question'>Number of question:</span>
      <input type="text" className='text-field-no-question' value={numQuestions} onChange={handleNumQuestionsChange} />
      
      {quizData.length > 0 && quizData.map((_, i) => {
        return (<QuizCreate key={i} quizData={quizData} setQuizData={setQuizData} index={i} />)
      })}

      <button className="btn" onClick={handleQuizSubmit}>Submit Quiz</button>
    </>
  );
};

export default Quiz;
