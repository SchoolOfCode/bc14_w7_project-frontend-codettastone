import React from "react";
function QuizButtons({ fetchQuestions }) {
  return (
    <div class="quizButtons">
      <button onClick={() => fetchQuestions("Easy")}>Start Easy Quiz</button>
      <button onClick={() => fetchQuestions("Medium")}>Start Medium Quiz</button>
      <button onClick={() => fetchQuestions("Hard")}>Start Hard Quiz</button>
    </div>
  );
}
export default QuizButtons;