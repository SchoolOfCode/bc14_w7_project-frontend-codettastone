import React, { useState } from "react";
import Sidebar from "../SideBar/index.js";

function Quiz() {
  console.log("Quiz component loaded");
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const fetchQuestions = async (difficulty) => {
    const response = await fetch(
      `https://quizapi.io/api/v1/questions?apiKey=OKhUQ6mCAkyNpwrGnpbYMkyR5eLflzWqJnbO7JcX&category=code&difficulty=${difficulty}&limit=10&tags=HTML`
    );
    const data = await response.json();
    setQuestions(data);
    setAnswers(new Array(data.length).fill(null));
    console.log("Questions fetched successfully:", data);
  };
  const handleAnswerChange = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };
  const handleSubmit = () => {
    let score = 0;
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] && questions[i].correct_answer === answers[i]) {
        score++;
      }
    }
    alert(`You scored ${score} out of ${questions.length}`);
    const correctAnswers = questions.map((question) => question.correct_answer);
    setAnswers(correctAnswers);
  };
  return (
    <div>
      <Sidebar fetchQuestions={fetchQuestions} />
      {questions.length > 0 && (
        <div>
          {questions.map((question, index) => (
            <div key={question.id}>
              <h3>{question.question}</h3>
              <ul className="quizList">
                {Object.entries(question.answers)
                  .filter(([key, value]) => value !== null)
                  .slice(
                    0,
                    question.multiple_correct_answers ? Infinity : 1
                  )
                  .map(([key, value]) => (
                    <li key={key}>
                      <label>
                        <input
                          type="radio"
                          name={`question-${question.id}`}
                          value={key}
                          checked={answers[index] === key}
                          onChange={() => handleAnswerChange(index, key)}
                        />
                        {value}
                      </label>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
          <button onClick={handleSubmit} style={{marginBottom: "20px"}}>Submit</button>
        </div>
      )}
    </div>
  );
}
export default Quiz;