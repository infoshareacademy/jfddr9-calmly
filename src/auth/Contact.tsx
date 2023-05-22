import styled from "styled-components";
import calmly from "../assets/logo-white.png";
import { useDispatch } from "react-redux";
import React, { useEffect, useState, ChangeEvent } from "react";
import { updateBg } from "../store/slice";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../api/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../api/firebase";

const Body = styled.body`
  max-height: 100vh;
  background: url(/src/assets/vectorXd.png) 100% 100% / cover no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    background-color: linear-gradient(
      141.59deg,
      #f6c59c 11.57%,
      #e3b4ab 53.27%,
      #b3b4ef 123.37%
    );
    background: none;
  }
`;
const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 15px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const LeftDiv = styled.div`
  max-width: 26%;
  display: flex;
  flex-direction: column;
  margin-right: 60px;
  @media (max-width: 768px) {
    display: column;
  }
`;
const RigthDiv = styled.div`
  max-width: 40%;
  display: flex;
  flex-direction: column;
`;
const Calmly = styled.img`
  max-width: 240px;
  margin: 10px 500px 0 0;
`;
const Authors = styled.p`
  margin-top: 40px;
  text-align: left;
  color: white;
  font-weight: 400;
  font-size: 22px;
  line-height: 30px;
`;
const GetInTouch = styled.p`
  font-weight: 600;
  font-size: 44px;
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
  // &:focus {
  //   color: pink;
  // }
  // &:valid {
  //   color: red;
  // }
`;
//////////////////////////////////////////////// naprawić inputy ////////////////////////////////////////////////////////
const TextArea = styled.textarea`
  max-width: 400px;
  max-height: 150px;
  min-width: 360px;
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
  border: solid 4px white;
  width: 115px;
  margin: -8px 0 55px 0;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Button = styled.button`
  cursor: pointer;
  padding: 14px 16px 10px;
  border-radius: 50px;
  border: none;
  background: rgba(255, 255, 255, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: 500;
  font-size: 18px;

  &:hover {
    transition: 0.3s ease-in;
    opacity: 0.9;
    color: #797bec;
  }
`;
const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: 500;
  align-items: center;
  margin: 20px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
const ListItem = styled.p`
  font-size: 20px;
  font-weight: 400;
  margin: 0 26px;
  &:hover {
    transition: 0.2s ease-in;
    cursor: pointer;
    color: #797bec;
  }
  @media (max-width: 768px) {
    margin: 0 4px;
  }
`;

export function Contact() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateBg("bgRevert"));
  }, [dispatch]);
  const navigate = useNavigate();
  const [thankYou, setThankYou] = useState(true);
  const [kontent, setKontent] = useState("Get in touch");
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
    console.log("wtf");
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
      <MainDiv>
        <Menu>
          <Navigation>
            <Calmly src={calmly} />
            <ListItem onClick={() => navigate("/feelbetter")}>
              Let's feel better
            </ListItem>
            <ListItem>Support</ListItem>
            <ListItem onClick={() => navigate("/contact")}>Contact</ListItem>
            <ListItem>
              <Button onClick={() => signOut(auth)}>Log out</Button>
            </ListItem>
          </Navigation>
        </Menu>
        <Menu>
          <LeftDiv>
            <Authors>
              was created by a group of beginner programmers:{" "}
              <b>Ania, Marietta, Nicoletta, Sylwia, Bartek and Dawid</b>
            </Authors>
          </LeftDiv>
          {thankYou ? (
            <RigthDiv>
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
                  placeholder="Tell us more about your feelings and observations and what we can do to improve Calmly"
                  name="message"
                  id="message"
                  value={message}
                  onChange={handleInputChange}
                ></TextArea>
                <SubmitButton onClick={handleFeedback} type="submit">
                  SUBMIT
                </SubmitButton>
              </Form>
            </RigthDiv>
          ) : (
            <RigthDiv>
              <GetInTouch>{kontent}</GetInTouch>
              <Hr style={{ width: "115px" }} />
              <Teachers>We will do our best to improve Calmly</Teachers>
              <Form style={{ visibility: "hidden" }}>
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
                  placeholder="Tell us more about your feelings and observations and what we can do to improve Calmly"
                  name="message"
                  id="message"
                  value={message}
                  onChange={handleInputChange}
                ></TextArea>
                <SubmitButton onClick={handleFeedback} type="submit">
                  SUBMIT
                </SubmitButton>
              </Form>
            </RigthDiv>
          )}
        </Menu>
      </MainDiv>
    </Body>
  );
}
