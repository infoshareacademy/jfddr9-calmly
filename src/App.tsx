import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { FeelBetter } from "./routes/FeelBetter";
import { LandingPage } from "./routes/LandingPage/LandingPage";
import { Home } from "./routes/Home/Home";
import { RegisterPage } from "./routes/RegisterPage";
import { LoginPage } from "./routes/LoginPage";
import { Journal } from "./routes/Journal";
import { Quiz } from "./routes/quiz";
import { About } from "./routes/About";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { LoaderComponent } from "./components/Loader";
import { signOut, updateAuthStateChanged } from "./store/authSlice";

import { doc, getDoc } from "firebase/firestore";
import { db } from "./api/firebase";

import { auth } from "./api/firebase";
import { ForgotPasswordPage } from "./routes/ForgotPasswordPage";
import { SupportPage } from "./routes/SupportPage/SupportPage";
import { TestResultPage } from "./routes/TestResultPage/TestResultPage";

function App() {
  const reduxStore: any = useSelector((state) => state);

  const dispatch = useDispatch();

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

  console.log(reduxStore.bg.text);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;

        const docRef = doc(db, `users/${uid}`);
        getDoc(docRef)
          .then((userData) => {
            const userNewData = userData.data();
            console.log(userNewData);
            dispatch(updateAuthStateChanged(userNewData));
            navigate("/home");
            setIsLoading(false);
          })
          .catch((e) => console.error(e));
      } else {
        dispatch(signOut());
        navigate("/");
        setIsLoading(false);
      }
    });
  }, []);

  return (
    <>
      <GlobalStyle
        bg={reduxStore.bg.text}
        animation={reduxStore.bg.breathingAnimation}
      />

      {!isLoading ? (
        <LoaderComponent />
      ) : (
        <Routes>
          <Route path={"/home"} element={<Home />} />
          <Route path={"/register"} element={<RegisterPage />} />
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"/forgotPassword"} element={<ForgotPasswordPage />} />
          <Route path={"/quiz"} element={<Quiz />} />
          <Route path={"/feelbetter"} element={<FeelBetter />} />
          <Route path={"/"} element={<LandingPage />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/journal"} element={<Journal />} />
          <Route path={"/supportpage"} element={<SupportPage />} />
          <Route
            path={"/testresult"}
            element={<TestResultPage stressLevel="middle" />}
          />
        </Routes>
      )}
    </>
  );
}

export default App;
