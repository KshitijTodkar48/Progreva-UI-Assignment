import './App.css'
import { ProgressBar } from './components/ProgressBar';
import { QuestionCard } from './components/QuestionCard';
import { useState, useEffect } from "react";
import { StatusGrid } from './components/StatusGrid';
import { Buttons } from './components/Buttons';

function App() {
  const [questions, setquestions] = useState([]) ;
  const [index, setindex] = useState(0) ;

  useEffect(() => {
    fetch('/questions.json')
    .then(response => response.json())
    .then(data => {setquestions(data) ;})
    .catch(error => console.error('Error fetching questions:', error));
  }, []) ;

  const nextQuestion = () => {
    if(index < questions.length - 1)
    {
       setindex((currentIndex) => currentIndex + 1) ;
    }
  }

  return (
    <div className="m-10 xl:m-12 flex flex-col gap-5">
      <ProgressBar currentQueNo={index + 1} />
      <div className="sm:flex justify-center gap-10">
        <div className="sm:w-3/5">
          <QuestionCard question={questions[index]} />
          <Buttons nextQuestion={nextQuestion} />
        </div>
        <StatusGrid />
      </div>
    </div>
  )
}

export default App ;
