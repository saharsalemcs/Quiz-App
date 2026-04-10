import styles from "./Timer.module.css";
import { useQuiz } from "../contexts/QuizContext";
import { useEffect } from "react";

function Timer() {
  const { secondsRemaining, dispatch } = useQuiz();

  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(
    function () {
      const intervalId = setInterval(() => {
        dispatch({ type: "tick" });
      }, 1000);

      // Clean up function
      return () => clearInterval(intervalId);
    },
    [dispatch],
  );

  return (
    <div className={styles.timer}>
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer;
