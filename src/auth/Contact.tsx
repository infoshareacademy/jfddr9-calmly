import styled from "styled-components";
import calmly from "../assets/logo-white.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { updateBg } from "../store/slice";

const Body = styled.body`
  max-height: 100vh;
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
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export function Contact() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateBg("bgHome"));
  }, [dispatch]);
  const [mail, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // const handleFeedback = async (e: FormEvent<HTMLFormElement>) => {
  //   console.log("Jeeeeeeebzdzidy");

  //   e.preventDefault();
  //   const form = e.currentTarget;
  //   const feedbackData = {
  //     mail: form.elements.email.value,
  //     name: form.elements.name.value,
  //     message: form.elements.message.value,
  //   };

  // Wysyłanie danych do bazy danych
  //   try {
  //     const docRef = await addDoc(collection(db, "feedback"), feedbackData);
  //     setEmail("");
  //     setName("");
  //     setMessage("");
  //     console.log("Wiadomość została wysłana. ID dokumentu:", docRef.id);
  //   } catch (error) {
  //     console.error("Błąd podczas wysyłania wiadomości:", error);
  //   }
  // };

  return (
    <Body>
      <MainDiv>
        <LeftDiv>
          <Calmly src={calmly}></Calmly>
          <Authors>
            was created by a group of beginner programmers: Ania, Marietta,
            Nikoletta, Sylwia, Bartek and Dawid
          </Authors>
          <Authors>
            with the invaluable help of trainers from InfoShare Academy: Tomek,
            Darek, Krystian and Filip
          </Authors>
        </LeftDiv>
        <RigthDiv>
          <GetInTouch>Get in touch</GetInTouch>
          <Hr />
          <Form>
            <Input
              placeholder="Name"
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Input>
            <Input
              placeholder="Email"
              type="email"
              name="email"
              id="email"
              value={mail}
              onChange={(e) => setEmail(e.target.value)}
            ></Input>
            <TextArea
              placeholder="Tell us more about your feelings and observations and what we can do to improve Calmly"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></TextArea>
            <SubmitButton type="submit">SUBMIT</SubmitButton>
          </Form>
        </RigthDiv>
      </MainDiv>
    </Body>
  );
}
