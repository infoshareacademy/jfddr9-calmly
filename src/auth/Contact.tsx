import styled from "styled-components";
import { useDispatch } from "react-redux";
import React, { useEffect, useState, ChangeEvent } from "react";
import { updateBg } from "../store/slice";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../api/firebase";
import { Navigation } from "../components/Navigation";
import ball from "../assets/Ellipse 29.svg";

const StyledImage = styled.img`
  position: absolute;
  overflow: hidden;
  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

const Obraz = styled(StyledImage)`
  height: 310px;
  top: 520px;
  left: 600px;
  animation: moving 30s infinite normal backwards;
  @keyframes moving {
    50% {
      transform: scale(1.2);
      left: 170px;
      top: 460px;
    }
    0%,
    100% {
      top: 520px;
      left: 600px;
    }
  }
  @media only screen and (max-width: 500px) {
    animation: none;
  }
  @media only screen and (min-width: 500px) and (max-width: 1250px) {
    opacity: 0.6;
    top: 140px;
    left: 140px;
    @keyframes moving {
      50% {
        transform: scale(1.2);
        left: 100px;
        top: 100px;
      }
      0%,
      100% {
        top: 140px;
        left: 140px;
      }
    }
  }
  @media only screen and (min-width: 1581px) {
    top: 120px;
    left: 120px;
    @keyframes moving {
      50% {
        transform: scale(1.2);
        left: 10px;
        top: 10px;
      }
      0%,
      100% {
        top: 120px;
        left: 120px;
      }
    }
  }
  @media only screen and (min-width: 1251px) and (max-width: 1580px) {
    top: 310px;
    left: 390px;
    @keyframes moving {
      50% {
        transform: scale(1.2);
        left: 100px;
        top: 310px;
      }
      0%,
      100% {
        top: 310px;
        left: 390px;
      }
    }
  }
`;

const ObrazTu = styled(StyledImage)`
  height: 440px;
  top: 70px;
  left: 920px;
  animation: movingOne 30s infinite normal backwards;

  @keyframes movingOne {
    50% {
      transform: scale(1.2);
      left: 1250px;
      top: 280px;
    }
    0%,
    100% {
      top: 70px;
      left: 920px;
    }
  }
  @media only screen and (min-width: 500px) and (max-width: 1250px) {
    opacity: 0.5;
    height: 100px;
    top: 50px;
    left: 550px;
    @keyframes movingOne {
      50% {
        transform: scale(1.2);
        left: 620px;
        top: 90px;
      }
      0%,
      100% {
        top: 50px;
        left: 550px;
      }
    }
  }
  @media only screen and (min-width: 1581px) {
    top: 60px;
    left: 600px;
  }
  @media only screen and (min-width: 1251px) and (max-width: 1580px) {
    top: 70px;
    left: 700px;
    @keyframes movingOne {
      50% {
        transform: scale(1.2);
        left: 1000px;
        top: 210px;
      }
      0%,
      100% {
        top: 70px;
        left: 800px;
      }
    }
  }
`;

const ObrazTri = styled(StyledImage)`
  height: 220px;
  top: 150px;
  left: 660px;
  animation: movingTri 30s infinite normal backwards;
  @keyframes movingTri {
    50% {
      transform: scale(1.2);
      left: 380px;
      top: 100px;
    }
    0%,
    100% {
      top: 150px;
      left: 660px;
    }
  }
  @media only screen and (min-width: 500px) and (max-width: 1250px) {
    opacity: 0.45;
    top: 80px;
    left: 350px;
    @keyframes movingTri {
      50% {
        transform: scale(1.2);
        left: 460px;
        top: 100px;
      }
      0%,
      100% {
        top: 80px;
        left: 350px;
      }
    }
  }
  @media only screen and (min-width: 1581px) {
    top: 100px;
    left: 400px;
  }
  @media only screen and (min-width: 1251px) {
    top: 120px;
    left: 500px;
  }
`;

const Body = styled.body`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-repeat: no-repeat;

  @media only screen and (min-width: 1250px) {
    background-color: linear-gradient(
      141.59deg,
      #f6c59c 11.57%,
      #e3b4ab 53.27%,
      #b3b4ef 123.37%
    );
    @media only screen and (min-width: 500px) and (max-width: 1250px) {
      background-color: linear-gradient(
        141.59deg,
        #f6c59c 11.57%,
        #e3b4ab 53.27%,
        #b3b4ef 123.37%
      );
      background-repeat: no-repeat;
    }
  }
`;
const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  flex-wrap: nowrap;

  @media only screen and (min-width: 1281px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const Menu = styled.div`
  z-index: 2;
  margin: 0px 25px;
  border: 1px solid rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.32) 65px 65px 100px;
  backdrop-filter: blur(37.5px);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  &::before {
    position: absolute;
    left: 250px;
    top: 55px;
    background-image: url("../assets/Ellipse 29.svg");
    z-index: 1;
    content: "";
    width: 100px;
    height: 100px;
  }
  @media only screen and (max-width: 1280px) {
    background: none;
    border: none;
    box-shadow: none;
    backdrop-filter: none;
  }
  @media only screen and (min-width: 1281px) {
    background: none;
    width: 46vw;
    height: 46vw;
  }
`;

const MenuContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media only screen and (max-width: 1280px) {
    width: 80vw;
    margin-top: 160px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 1280px) {
    justify-content: center;
    align-items: center;
  }
`;

const Authors = styled.a`
  width: 19vw;
  margin: 20px 0 0 0;
  text-align: justify;
  color: white;
  font-weight: 400;
  font-size: 17px;
  line-height: 24px;
  @media only screen and (max-width: 1280px) {
    width: 65vw;
    font-size: 16px;
    line-height: 18px;
    font-weight: 300;
    margin: 10px 26px 0 0;
    text-align: center;
  }
`;
const Feedback = styled.p`
  width: 18vw;
  text-align: center;
  color: white;
  font-weight: 500;
  font-size: 22px;
  line-height: 30px;
`;
const GetInTouch = styled.p`
  font-weight: 600;
  font-size: 44px;
  color: white;
  text-align: left;
  margin-bottom: 0;
  @media only screen and (max-width: 820px) {
    font-size: 34px;
  }
`;
const Input = styled.input`
  width: 18vw;
  margin-bottom: 12px;
  border: none;
  border-radius: 10px;
  padding: 16px;
  &::placeholder {
    color: hsla(239, 65%, 82%, 1);
    font-weight: 400;
    font-size: 16px;
  }
  @media only screen and (max-width: 1280px) {
    width: 60vw;
    margin-bottom: 8px;
    padding: 10px;
  }
  @media only screen and (min-width: 1581px) {
    margin-bottom: 4px;
    padding: 12px;
  }
  @media only screen and (min-width: 1281px) and (max-width: 1580px) {
    margin-bottom: 4px;
    padding: 10px;
  }
`;
const TextArea = styled.textarea`
  width: 18vw;
  max-height: 150px;
  min-height: 140px;
  border: none;
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 24px;

  &::placeholder {
    font-family: "Outfit";
    color: hsla(239, 65%, 82%, 1);
    font-weight: 300;
    font-size: 16px;
  }
  @media only screen and (max-width: 1280px) {
    width: 60vw;
    margin-bottom: 3px;
    padding: 9px;
  }
  @media only screen and (min-width: 1581px) {
    margin-bottom: 4px;
    padding: 12px;
  }
  @media only screen and (min-width: 1281px) and (max-width: 1580px) {
    margin-bottom: 2px;
    padding: 10px;
  }
`;
const SubmitButton = styled.button`
  background-color: #797bec;
  border: none;
  color: white;
  border-radius: 24px;
  padding: 14px;
  font-size: 20px;
  font-weight: 600;
  margin: 25px 0;
  &:hover {
    background-color: #7072d8;
  }
  @media only screen and (min-width: 500px) and (max-width: 1280px) {
    padding: 8px;
    font-weight: 500;
    background-color: #9697e1;
    color: white;
    :hover {
      background-color: #b9baed;
      color: white;
    }
  }
  @media only screen and (min-width: 1581px) {
    padding: 10px;
    font-weight: 500;
  }
  @media only screen and (min-width: 1281px) and (max-width: 1580px) {
    padding: 8px;
    font-weight: 600;
    font-size: 18px;
    background-color: #9697e1;
    color: white;
    :hover {
      background-color: #b9baed;
      color: white;
    }
  }
`;
const Hr = styled.hr`
  border: solid 4px white;
  width: 85px;
  margin: -8px 0 40px 0;
  @media only screen and (min-width: 1581px) {
    width: 75px;
    border: solid 3px white;
    margin: -8px 0 25px 0;
  }
  @media only screen and (min-width: 1281px) and (max-width: 1580px) {
    width: 65px;
    border: solid 2px white;
    margin: -8px 0 18px 0;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export function Contact() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateBg("bgRevert"));
  }, [dispatch]);

  const [thankYou, setThankYou] = useState(true);
  const [kontent, setKontent] = useState("Let's talk");
  const [content, setContent] = useState({
    email: "",
    name: "",
    message: "",
  });
  const { email, name, message } = content;
  const handleInputChange = (e: ChangeEvent<HTMLFormElement> | any) => {
    setContent({
      ...content,
      [e.target.name]: e.target.value,
    });
  };
  const handleFeedback = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addDoc(collection(db, "feedback"), {
      email: content.email,
      name: content.name,
      message: content.message,
    })
      .then(() => {
        console.log("Wszystko OK");
        setContent({
          email: "",
          name: "",
          message: "",
        });
        setThankYou(false);
        setKontent("Thank you!");
      })
      .catch((error) => console.error("Something went wrong", error));
  };

  return (
    <Body>
      <Obraz src={ball} />
      <ObrazTu src={ball} />
      <ObrazTri src={ball} />
      <MainDiv>
        <Navigation
          src="src/assets/logo-white.png"
          srcHamburger="src/assets/MenuWhite.svg"
          alt="Calmly company's logo in white colour"
        />
        <Menu>
          <MenuContent>
            {thankYou ? (
              <Authors>
                <b>Calmly</b> was created by a group of beginner programmers:{" "}
                <b>Ania, Marietta, Nikoletta, Sylwia, Bartek and Dawid</b>
              </Authors>
            ) : (
              <Authors></Authors>
            )}
            {thankYou ? (
              <Content>
                <GetInTouch>{kontent}</GetInTouch>
                <Hr />
                <Form>
                  <Input
                    placeholder="Name"
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={handleInputChange}
                  ></Input>
                  <Input
                    placeholder="Email"
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={handleInputChange}
                  ></Input>
                  <TextArea
                    placeholder="Tell us more about your experience with Calmly"
                    name="message"
                    id="message"
                    value={message}
                    onChange={handleInputChange}
                  ></TextArea>
                  <SubmitButton onClick={handleFeedback} type="submit">
                    SUBMIT
                  </SubmitButton>
                </Form>
              </Content>
            ) : (
              <Content style={{ justifyContent: "center" }}>
                <GetInTouch style={{ textAlign: "center" }}>
                  {kontent}
                </GetInTouch>
                <Feedback>We will do our best to improve Calmly</Feedback>
              </Content>
            )}
          </MenuContent>
        </Menu>
      </MainDiv>
    </Body>
  );
}
