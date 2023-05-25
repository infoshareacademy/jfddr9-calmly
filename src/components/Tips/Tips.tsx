import { useEffect, useState } from "react";
import styled from "styled-components";
import { updateBg } from "../../store/slice";
import { useDispatch } from "react-redux";

const Button = styled.button`
  background-color: white;
  color: #797bec;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  z-index: 999;
  height: 41px;
  width: 217px;
  margin-bottom: 12px;
  font-weigth: 400;
  font-size: 20px;
  font-family: "Outfit", sans-serif;
  background-color: #ffffff84;
  &:hover {
    transition: 0.5s;
    background-color: white;
  }
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-end;
`;
const Dividi = styled.p`
  font-weight: 600;
  text-transform: lowercase;
  font-size: 22px;
  color: #797bec;
`;
const ButtonDiv = styled.div`
  z-index: 999;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const MainDivv = styled.div`
  z-index: 998;
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  width: 205px;
  height: 205px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Tips = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateBg("bgStep5"));
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
    "Think about people who could need your help and try do it",
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
      <Wrapper>
        <MainDivv>
          <Dividi id="tips">{tipValue}</Dividi>
        </MainDivv>
        <ButtonDiv>
          <Button onClick={newGeneratedTip}>New Tip</Button>
        </ButtonDiv>
      </Wrapper>
    </>
  );
};
