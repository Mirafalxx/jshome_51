import React, { useState } from "react";

function Quiz() {
  // let a = [1, 9, 3, 6, 2];
  const [num, setNum] = useState([]);
  let quizArr = [];
  const generateNum = () => {
    for (let i = 0; i < 4; i++) {
      const quizNumbers = Math.floor(Math.random() * (36 - 5)) + 5;
      // let uniq = [...new Set(quizNumbers)];
      // quizArr.push(uniq);
      // Array.from(new Set(qu))
      quizArr.push(quizNumbers);
    }
    setNum(quizArr);
    // quizArr = [];
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
