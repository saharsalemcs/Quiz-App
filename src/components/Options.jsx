import { useQuiz } from "../contexts/QuizContext";
import Button from "./Button";
import styles from "./Options.module.css";

function Options({ question }) {
  const { dispatch } = useQuiz();

  return (
    <div className={styles.options}>
      {question.options.map((option, index) => (
        <Button
          className="btn-option"
          key={option}
          onClick={() => dispatch({ type: "chooseAnswer", payload: index })}
        >
          {option}
        </Button>
      ))}
    </div>
  );
}

export default Options;
