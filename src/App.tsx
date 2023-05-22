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
import { Contact } from "./auth/Contact";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { LoaderComponent } from "./components/Loader";
import { signOut, updateAuthStateChanged } from "./store/authSlice";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./api/firebase";

import { auth } from "./api/firebase";
import { ForgotPasswordPage } from "./routes/ForgotPasswordPage";

import { Tips } from "./components/Tips/Tips";

import { SupportPage } from "./routes/SupportPage/SupportPage";

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
        ? "white url('src/assets/h page.png') center center / cover no-repeat fixed;"
        : bg === "bgSupport"
        ? "linear-gradient(114.94deg, #F6C59C 1.8%, #E3B4AB 35.2%, #B3B4EF 84.75%);"
        : bg === "bgRevert"
        ? "linear-gradient(336deg, rgba(137, 141, 230, 1) 0%, rgba(243, 194, 160, 1) 90%)"
        : bg === "bgQuiz"
        ? "linear-gradient(180deg, #B3B4EF 5.3%, #797BEC 106.76%);"
        : bg === "bgQuiz2"
        ? "linear-gradient(180.17deg, #5C5DE3 0%, #8A8CEE 58.41%, #D1D2FA 74.25%);"
        : bg === "bgViolet"
        ? "linear-gradient(51.96deg, rgba(227, 180, 171, 0.55) -7.91%, rgba(179, 180, 239, 0.55) 54.86%, rgba(121, 123, 236, 0.55) 98.75%);"
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

      {isLoading ? (
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
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"/journal"} element={<Journal />} />
          <Route path={"/tips"} element={<Tips />} />
          <Route path={"/support"} element={<SupportPage />} />
        </Routes>
      )}
    </>
  );
}

export default App;
