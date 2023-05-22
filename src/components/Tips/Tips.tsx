import { useEffect, useState } from "react";
import styled from "styled-components";
import { updateBg } from "../../store/slice";
import { useDispatch } from "react-redux";

// const Background = styled.div`
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background: linear-gradient(
//     141.59deg,
//     #f6c59c 11.57%,
//     #e3b4ab 53.27%,
//     #b3b4ef 123.37%
//   );
// `;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 40px;
  font-weight: 600;
  color: white;
`;

const Button = styled.button`
  background: white;
  border: none;
  outline: none;
  cursor: pointer;
  height: 60px;
  width: 120px;
  border-radius: 30px;
  color: #797bec;
  box-shadow: 19px 25px 31px -16px rgba(66, 68, 90, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 20px;
  margin-top: 24px;
`;

const Wrapper = styled.div`
  background: #fff;
  width: 60%;
  max-width: 800px;
  height: 270px;
  border-radius: 16px;
  font-size: 50px;
  color: #797bec;
  box-shadow: 19px 25px 31px -16px rgba(66, 68, 90, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;

  & div {
    padding-inline: 30px;
  }
`;

export const Tips = () => {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateBg("bgDefault"));
  }, [dispatch]);

  const tips = [
    "Spend your last paycheck on Zalando!",
    "Take a walk",
    "Meditate",
    "Make your fav meal!",
    "Read an inspiring book",
    "Water your plants",
    "Play with your pet",
    "Watch your fav movie",
    "Clean up your place",
    "Talk with your friend",
    "Do something for others",
  ];

  const generatedRandomNumber = Math.floor(Math.random() * 10);

  const onClickShow = () => setShow((prev) => !prev);

  return (
    <>
      {show ? (
        <Wrapper>
          <div>{tips[generatedRandomNumber]}</div>
        </Wrapper>
      ) : (
        <Div>
          Do something for yourself
          <Button onClick={onClickShow}>start</Button>
        </Div>
      )}
    </>
  );
};
