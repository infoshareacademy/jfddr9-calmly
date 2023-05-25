import { useEffect, useState } from "react";
import styled from "styled-components";
import { updateBg } from "../../store/slice";
import { useDispatch } from "react-redux";
import { PinnedSmallLogo } from "../PinnedSmallLogo";

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

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

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
  height: 220px;
  width: 220px;
  border-radius: 999px;
  color: #797bec;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
  padding-top: 24px;
  font-weight: 700;
  font-size: 64px;
  margin-top: 24px;

  & span {
    font-size: 24px;
  }
`;

const Wrapper = styled.div`
  width: 60%;
  max-width: 800px;
  height: 270px;
  border-radius: 16px;
  font-size: 50px;
  color: #797bec;
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
    "Invite your friends and make a small party!",
    "Make your own vision board",
    "Take a social media break",
    "Smile at first person you meet",
    "Visit animals at the shelter",
    "Pay someone a compliment",
    "Pay yourself a compliment",
    "Forgive yourself for your mistakes",
    "Think about people who could need your help and try to do something for them",
    "Visit or call your old friend",
    "Help a family member with a task",
    "Donate a necessity to people in need",
    "Have a meaningful conversation with someone close",
    "Show someone your gratitude for being on your side",
    "Try a new way to be more eco friendly",
    "Become a volunteer",
    "Take care of yourself (your diet, health, body and mind)",
    "Take a nap",
    "Increase your creativity: write a poem, create a painting, make a sculpture ",
    "Hug someone important for you",
    "Hug your pet",
    "Treat yourself",
  ];

  const generatedRandomNumber = Math.floor(Math.random() * 10);

  const onClickShow = () => setShow((prev) => !prev);

  return (
    <Background>
      <PinnedSmallLogo />
      {show ? (
        <Wrapper>
          <div>{tips[generatedRandomNumber]}</div>
        </Wrapper>
      ) : (
        <Div>
          <Button onClick={onClickShow}>
            treat yourself<span>Next Tip</span>
          </Button>
        </Div>
      )}
    </Background>
  );
};
