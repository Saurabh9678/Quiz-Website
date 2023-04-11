import React from "react";
import lottie from "lottie-web";
import {Link} from "react-router-dom"

import reactLogo from "../lottie/rubic-animation.json";
import "../styles/Main.css"


export default function Main() {
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#react-logo"),
      animationData: reactLogo
    });
  }, []);
  function joinQuiz(){
    console.log('====================================');
    console.log("Join");
    console.log('====================================');
  }
  function createQuiz(){
    console.log('====================================');
    console.log("Create");
    console.log('====================================');
  }

  return (
    <>
      <div className="heading">QUIZ</div>
      <div className="box">
        <div className="rules-area">
          <h2>About The Quiz</h2>
        <ol>
            <li>You can join quizes created by other.</li>
            <li>You can created your own quiz. And share with your friends to join</li>
            <li>You can explore quizes by topic</li>
            <li>You can also view leaderboard of a particular quiz using the Code</li>
        </ol>
        <Link className='btn' to={'/join'} onClick={joinQuiz}>Join</Link>
        <Link className='btn' to={'/quiz'} onClick={createQuiz}>Create</Link>
        
        </div>
        <div id="react-logo" />
      </div>
    </>
  );
}


