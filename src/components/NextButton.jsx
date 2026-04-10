import { useQuiz } from "../contexts/QuizContext";
import Button from "./Button";

function NextButton() {
  const { answer, dispatch, index, numQuestions } = useQuiz();

  if (answer === null) return null;

  if (index < numQuestions - 1)
    return (
      <Button
        className="btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </Button>
    );

  if (index === numQuestions - 1)
    return (
      <Button className="btn-ui" onClick={() => dispatch({ type: "finish" })}>
        Finish
      </Button>
    );
}

export default NextButton;
