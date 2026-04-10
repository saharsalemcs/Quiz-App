import { useQuiz } from "../contexts/QuizContext";
import Button from "./Button";
import styles from "./Options.module.css";

function Options({ question }) {
  const { dispatch, answer } = useQuiz();
  const hasAnswer = answer !== null;

  return (
    <div className={styles.options}>
      {question.options.map((option, index) => (
        <Button
          className={`btn-option ${index === answer ? "answer" : ""} ${hasAnswer ? (index === question.correctOption ? "correct" : "wrong") : ""}`}
          key={option}
          onClick={function () {
            dispatch({ type: "chooseAnswer", payload: index });
            console.log(index);
          }}
          disabled={hasAnswer}
        >
          {option}
        </Button>
      ))}
    </div>
  );
}

export default Options;
