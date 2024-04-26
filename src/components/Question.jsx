import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";

const Question = ({
  key,
  questionText,
  answers,
  onSelectAnswer,
  onSkipAnswer,
  selectedAnswer,
  answerState,
}) => {
  return (
    <div id="question">
      <QuestionTimer key={key} timeout={10000} onTimeout={onSkipAnswer} />
      <h2>{questionText}</h2>
      <Answers
        key={key}
        answers={answers}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        onSelect={onSelectAnswer}
      />
    </div>
  );
};

export default Question;
