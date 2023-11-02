import React, { useState } from 'react';
import Result from './component/quiz/Result';
import Game from './component/quiz/game';


const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

function App() {

  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];
  const countQuestion = questions.length;

  const onClickVariant = (index) => {
    if (question.correct === index){
      setCorrect(correct + 1);
    }
    setStep(step + 1);
  } 

  return (
    <div className="App">
      {step < questions.length ? (<Game countQuestion={countQuestion} step={step} question={question} onClickVariant={onClickVariant} />
      ) : (
      <Result correct={correct} countQuestion={countQuestion}/>)}
    </div>
  );
}

export default App;
