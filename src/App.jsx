import Header from "./components/Header";
import Main from "./components/Main";
import StartScreen from "./components/StartScreen";
import Loader from "./components/Loader";
import { useQuiz } from "./contexts/QuizContext";
import ErrorMessage from "./components/ErrorMessage";
import Question from "./components/Question";
import Footer from "./components/Footer";
import NextButton from "./components/NextButton";

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
            <Question />
            <Footer>
              <NextButton />
            </Footer>
          </>
        )}
      </Main>
    </div>
  );
}

export default App;
