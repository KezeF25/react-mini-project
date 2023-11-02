import React from 'react';

function Game({ countQuestion, step, question, onClickVariant }) {
    const percent = step / countQuestion * 100;
  
    return (
      <>
        <div className="progress">
          <div style={{ width: `${percent}%` }} className="progress__inner"></div>
        </div>
        <h1>{question.title}</h1>
        <ul>
          {question.variants.map((text, index) =>
            <li onClick={() => {onClickVariant(index)}} key={text}>
              {text}
            </li>
          )}
        </ul>
      </>
    );
}

export default Game;