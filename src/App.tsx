import "./App.css";
import { Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { useSelector } from "react-redux";
import { FeelBetter } from "./routes/FeelBetter";
import { Register } from "./auth/Register";
import { Login } from "./auth/Login";
import { Quiz } from "./components/quiz";
import { SurveyComponent } from "./components/MultiSelectQuiz/multiselectquiz";

function App() {
  const bgStates: any = useSelector((state) => state);

  type GlobalStyleProps = {
    bg: string;
    animation: boolean;
    children?: React.ReactNode;
  };

  const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  body {
    background: ${({ bg }) =>
      bg === "bgDefault"
        ? "linear-gradient(141.59deg, #f6c59c 11.57%, #e3b4ab 53.27%, #b3b4ef 123.37%);"
        : bg === "bgHome"
        ? "linear-gradient(153.92deg, #F6C59C 9.05%, #E3B4AB 37.88%, #B3B4EF 79.44%)"
        : bg === "bgQuiz"
        ? "linear-gradient(180deg, #B3B4EF 5.3%, #797BEC 106.76%);"
        : bg === "bgCircle"
        ? `radial-gradient(
          circle,
          rgba(246, 197, 156, 1) 0%,
          rgba(227, 180, 171, 1) 45%,
          rgba(179, 180, 239, 1) 100%
        )`
        : "#222"};
        ${({ bg }) =>
          bg === "bgCircle" &&
          `animation: anim 8s 15 0.2s alternate backwards;animation-play-state: paused;`}
        ${({ animation }) =>
          animation
            ? "animation-play-state: running;"
            : "animation-play-state: paused;"}
        
  
  }
`;
  console.log(bgStates.reducer.text);
  console.log(bgStates.reducer.breathingAnimation);

  return (
    <>
      <GlobalStyle
        bg={bgStates.reducer.text}
        animation={bgStates.reducer.breathingAnimation}
      />

      <Routes>
        <Route path={"/home"} element={<div>home</div>} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/quiz"} element={<Quiz />} />
        <Route path={"/quiz2"} element={<SurveyComponent />} />
        <Route path={"/feelbetter"} element={<FeelBetter />} />
      </Routes>
    </>
  );
}

export default App;
