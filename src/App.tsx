import "./App.css";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Contener = styled.div`
  background-color: blue;
`;

function App() {
  const text: any = useSelector((state) => state);

  return (
    <Contener>
      {text.exampleReducer.text}
      <Routes>
        <Route path={"/home"} element={<div>home</div>} />
        <Route path={"/login"} element={<div>login</div>} />
      </Routes>
    </Contener>
  );
}

export default App;
