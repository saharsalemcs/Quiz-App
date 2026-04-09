import { useQuiz } from "../contexts/QuizContext";
import Button from "./Button";
import styles from "./StartScreen.module.css";

function StartScreen() {
  const { numQuestions, dispatch } = useQuiz();

  return (
    <div className={styles.start}>
      <h2>Welcome To The React Quiz!</h2>
      <h3>{numQuestions} questions to test your react mastry</h3>
      <Button className="btn-ui" onClick={() => dispatch({ type: "start" })}>
        Let's Start
      </Button>
    </div>
  );
}

export default StartScreen;
