import styles from "./FinishScreen.module.css";
import { useQuiz } from "../contexts/QuizContext";
import Button from "./Button";

function FinishScreen() {
  const { dispatch, points, maxPossiblePoints, highscore } = useQuiz();

  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage >= 0 && percentage < 50) emoji = "🤨";
  if (percentage === 0) emoji = "🤦‍♂️";

  return (
    <div>
      <p className={styles.result}>
        {emoji} You scored {points} out of {maxPossiblePoints} (
        {Math.round(percentage)}
        %)
      </p>

      <p className={styles.highscore}>(Highscore: {highscore})</p>

      <Button className="btn-ui" onClick={() => dispatch({ type: "restart" })}>
        Restart Quiz
      </Button>
    </div>
  );
}

export default FinishScreen;
