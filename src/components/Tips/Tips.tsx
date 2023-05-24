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
// const Div = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   font-size: 40px;
//   font-weight: 600;
//   color: white;
// `;

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
  display: flex;
  flex-direction: column;
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
    "Invite some friends and make a small party!",
    "Make your own vision board",
    "Take a break from social media",
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
    "Show someone gratitude for being on your side",
    "Try a new way to be more eco friendly",
    "Become a volunteer",
    "Take care of yourself (your diet, health, body and mind)",
    "Take a nap",
    "Increase your creativity: write a poem, create a painting, make a sculpture",
    "Hug someone important for you",
    "Hug your pet",
    "Treat yourself",
  ];

  let generatedRandomNumber = Math.floor(Math.random() * tips.length);
  const [tipValue, setTipValue] = useState(tips[generatedRandomNumber]);

  const newGeneratedTip = () => {
    let num = Math.floor(Math.random() * tips.length);
    console.log(num);
    setTipValue(tips[num]);
  };

  return (
    <>
      <PinnedSmallLogo />
      <Wrapper>
        <div id="tips">{tipValue}</div>
        <Button onClick={newGeneratedTip}>New Tip</Button>
      </Wrapper>
    </>
  );
};
