import Header from "./components/Header";
import Main from "./components/Main";
import StartScreen from "./components/StartScreen";
import Loader from "./components/Loader";
import { useQuiz } from "./contexts/QuizContext";
import ErrorMessage from "./components/ErrorMessage";
import Question from "./components/Question";
import Footer from "./components/Footer";
import NextButton from "./components/NextButton";
import FinishScreen from "./components/FinishScreen";
import Progress from "./components/Progress";
import Timer from "./components/Timer";

function App() {
  const { status } = useQuiz();

  return (
    <div className="app">
      <Header />

      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <ErrorMessage />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === "finished" && <FinishScreen />}
      </Main>
    </div>
  );
}

export default App;
