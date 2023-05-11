import "./App.css";
import { Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { useSelector } from "react-redux";
import { Breathing } from "./components/Breathing";
import { FeelBetter } from "./routes/FeelBetter";
import { Register } from "./auth/Register";
import { Login } from "./auth/Login";

function App() {
  const text: any = useSelector((state) => state);

  type GlobalStyleProps = {
    bg: string;
    children?: React.ReactNode;
  };

  const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  body {
    background: ${({ bg }) =>
      bg === "bgDefault"
        ? "linear-gradient(141.59deg, #f6c59c 11.57%, #e3b4ab 53.27%, #b3b4ef 123.37%);"
        : bg === "bgHome"
        ? "linear-gradient(153.92deg, #F6C59C 9.05%, #E3B4AB 37.88%, #B3B4EF 79.44%)"
        : "#222"};
  }
`;
  console.log(text.reducer.text);

  return (
    <>
      <GlobalStyle bg={text.reducer.text} />

      <Routes>
        <Route path={"/home"} element={<div>home</div>} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/feelbetter"} element={<FeelBetter />} />
        <Route path={"/breathing"} element={<Breathing />} />
      </Routes>
    </>
  );
}

export default App;
