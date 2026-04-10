import { useQuiz } from "../contexts/QuizContext";
import styles from "./Progress.module.css";

function Progress() {
  const { numQuestions, index, answer, maxPossiblePoints, points } = useQuiz();

  return (
    <header className={styles.progress}>
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
