import "./App.css";
import { Route, Routes } from "react-router-dom";
//import styled from 'styled-components';
//import { useSelector } from 'react-redux';

import { FeelBetter } from "./components/routes/FeelBetter";

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
      <Route path={"/login"} element={<div>login</div>} />
      <Route path={"/feelbetter"} element={<FeelBetter />} />
    </Routes>
    //</Contener>
  );
}

export default App;