import React from "react";
import Header from "./components/Header";
import Quiz from "./components/Quiz";
import quizComplete from "./assets/quiz-complete.png";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Quiz />
      </main>
    </>
  );
};

export default App;
