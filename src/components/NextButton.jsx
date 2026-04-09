import { useQuiz } from "../contexts/QuizContext";
import Button from "./Button";

function NextButton() {
  const { answer, dispatch } = useQuiz();

  if (answer === null) return null;

  return (
    <Button
      className="btn-ui"
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      Next
    </Button>
  );
}

export default NextButton;
