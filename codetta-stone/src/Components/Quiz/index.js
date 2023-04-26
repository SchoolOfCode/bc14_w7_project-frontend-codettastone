import React, { useState } from "react";

function Quiz() {
  console.log("Quiz component loaded");
  const [questions, setQuestions] = useState([]);

  const fetchQuestions = async () => {
    const response = await fetch(
      "https://quizapi.io/api/v1/questions?apiKey=OKhUQ6mCAkyNpwrGnpbYMkyR5eLflzWqJnbO7JcX&difficulty=Easy&limit=10&tags=JavaScript"
    );
    const data = await response.json();
    setQuestions(data);
    console.log("Questions fetched successfully:", data);
  };

  return (
    <div>
      <button onClick={fetchQuestions}>Start Easy Quiz</button>
      {questions.length > 0 && (
        <div>
          {questions.map((question) => (
            <div key={question.id}>
              <h3>{question.question}</h3>
          
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Quiz;


