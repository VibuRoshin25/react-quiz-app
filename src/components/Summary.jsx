import quizComplete from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";

const Summary = ({ userAnswers }) => {
  cons;
  return (
    <div id="summary">
      <img src={quizComplete} />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats"></div>
      <ol>
        {userAnswers.map((answer) => {
          let cssClass = "user-answer";
          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += "wrong";
          }
          return (
            <li key={answer}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className="user-answer">{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Summary;
