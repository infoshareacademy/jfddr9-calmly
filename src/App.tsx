import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { useSelector } from "react-redux";
import { FeelBetter } from "./routes/FeelBetter";
import { LandingPage } from "./routes/LandingPage/LandingPage";
import { Home } from "./routes/Home/Home";
import { RegisterPage } from "./components/RegisterPage";
import { LoginPage } from "./components/LoginPage";
import { Quiz } from "./components//stressQuiz/quiz";
import { SurveyComponent } from "./components/MultiSelectQuiz/multiselectquiz";
import { About } from "./components/About";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { LoaderComponent } from "./components/Loader";

import { auth } from "./api/firebase";
import { ForgotPasswordPage } from "./components/ForgotPasswordPage";

function App() {
  const bgStates: any = useSelector((state) => state);

  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

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
        : "white"};
        ${({ bg }) =>
          bg === "bgCircle" &&
          `animation: anim 8s 14 0.1s alternate backwards;animation-play-state: paused;`}
        ${({ animation }) =>
          animation
            ? "animation-play-state: running;"
            : "animation-play-state: paused;"}
        
  
  }
`;
  console.log(bgStates.reducer.text);
  console.log(bgStates.reducer.breathingAnimation);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log(uid);

        ////tutaj update stanu w redux z informacjami o użytkowniku

        navigate("/home");
        setIsLoading(false);

        // ...
      } else {
        // User is signed out
        // ...
        navigate("/");
        setIsLoading(false);
      }
    });
  }, []);

  return (
    <>
      <GlobalStyle
        bg={bgStates.reducer.text}
        animation={bgStates.reducer.breathingAnimation}
      />

      {isLoading ? (
        <LoaderComponent />
      ) : (
        <Routes>
          <Route path={"/home"} element={<Home />} />
          <Route path={"/register"} element={<RegisterPage />} />
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"/forgotPassword"} element={<ForgotPasswordPage />} />
          <Route path={"/quiz"} element={<Quiz />} />
          <Route path={"/quiz2"} element={<SurveyComponent />} />
          <Route path={"/feelbetter"} element={<FeelBetter />} />
          <Route path={"/"} element={<LandingPage />} />
          <Route path={"/about"} element={<About />} />
        </Routes>
      )}
    </>
  );
}

export default App;
