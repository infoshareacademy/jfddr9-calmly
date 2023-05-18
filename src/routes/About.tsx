import styled from "styled-components";
import calmly from "../assets/logo-white.png";
const Body = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(
    150.25deg,
    #f6c59c 5.67%,
    #e3b4ab 33.27%,
    #b3b4ef 73.04%
  );
  background: url(/src/assets/vectorXd.png) 100% 100% / cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const LeftDiv = styled.div`
  max-width: 30%;
  display: flex;
  flex-direction: column;
  margin-left: 80px;
`;
const RigthDiv = styled.div`
  max-width: 45%;
  display: flex;
  flex-direction: column;
  margin-right: 220px;
`;

const Calmly = styled.img`
  max-width: 480px;
`;
const Authors = styled.p`
  text-align: left;
  color: white;
  font-weight: 400;
  font-size: 22px;
  line-height: 30px;
`;

const GetInTouch = styled.p`
  font-weight: 600;
  font-size: 54px;
  color: white;
  text-align: left;
  margin-bottom: 0;
`;
const Input = styled.input`
  margin-bottom: 12px;
  border: none;
  border-radius: 10px;
  padding: 16px;
  &::placeholder {
    color: hsla(239, 65%, 82%, 1);
    font-weight: 400;
    font-size: 16px;
  }
`;
const TextArea = styled.textarea`
max-width: 400px;
max-height: 180px;
min-width: 360px;
min-height: 160px;
border: none;
border-radius: 10px;
padding: 16px;
margin-bottom: 24px;

&::placeholder{
font-family: 'Outfit';
color: hsla(239, 65%, 82%, 1);
font-weight: 300;
font-size: 16px;
`;
const SubmitButton = styled.button`
  background-color: #797bec;
  border: none;
  color: white;
  border-radius: 24px;
  padding: 14px;
  font-size: 20px;
  font-weight: 600;
  &:hover {
    background-color: #7072d8;
  }
`;
const Hr = styled.hr`
  border: solid 5px white;
  width: 135px;
  margin: -8px 0 75px 0;
`;

export function About() {
  return (
    <Body>
      <MainDiv>
        <LeftDiv>
          <Calmly src={calmly}></Calmly>
          <Authors>
            was created by a group of beginner programmers: Ania, Marietta,
            Nikoletta, Sylwia, Bartek and Dawid
          </Authors>
        </LeftDiv>
        <RigthDiv>
          <GetInTouch>Get in touch</GetInTouch>
          <Hr />
          <Input placeholder="Name"></Input>
          <Input placeholder="Email"></Input>
          <TextArea placeholder="Tell us more about your feelings and observations and what we can do to improve Calmly"></TextArea>
          <SubmitButton>SUBMIT</SubmitButton>
        </RigthDiv>
      </MainDiv>
    </Body>
  );
}
