import "./App.css";
import { Route, Routes } from "react-router-dom";
//import styled from 'styled-components';
//import { useSelector } from 'react-redux';
import { Breathing } from "./components/Breathing";
import { FeelBetter } from "./routes/FeelBetter";
import { Register } from "./auth/Register";
import { Login } from "./auth/Login";
import { About } from "./components/About";

// const Contener = styled.div`
//   font-size: 36px;
// `;

function App() {
  //const text: any = useSelector((state) => state);

  return (
    //<Contener>
    //{text.exampleReducer.text}

    <Routes>
      <Route path={"/home"} element={<div>home</div>} />
      <Route path={"/register"} element={<Register />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/feelbetter"} element={<FeelBetter />} />
      <Route path={"/breathing"} element={<Breathing />} />
      <Route path={"/about"} element={<About />} />
    </Routes>
    //</Contener>
  );
}

export default App;
