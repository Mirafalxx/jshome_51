import React, { useState } from "react";

function Quiz() {
  // let a = [1, 9, 3, 6, 2];
  const [num, setNum] = useState([]);

  const generateNum = () => {
    const quizNumbers = Math.floor(Math.random() * (36 - 5)) + 5;
    // console.log(typeof quizNumbers);
    // num.sort();
    return setNum([quizNumbers].concat(num));
  };

  console.log(num);
  return (
    <>
      <div className="quiz">
        {num.map((quiznum) => {
          const { id } = quiznum;
          return (
            <div className="quiz-items" key={quiznum.toString()}>
              {quiznum}
            </div>
          );
        })}
      </div>

      <button onClick={generateNum} className="btn">
        New Numbers
      </button>
    </>
  );
}

export default Quiz;
