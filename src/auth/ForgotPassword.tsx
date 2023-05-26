import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../api/firebase";

import styled from "styled-components";

import { firebaseErrors } from "../utils/firebaseErrors";
import { FirebaseError } from "firebase/app";

const Header = styled.p`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 45px;
  text-align: center;
  margin-top: 90px;
  color: #797bec;
`;

const TextInfo = styled.p`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  color: #797bec;
`;

const FormForgotPassword = styled.form`
  font-family: "Outfit";
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: relative;
`;

const InputForgotPassword = styled.input`
  height: 50px;
  width: calc(100% - 45px);
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  border: 0;
  color: #797bec;
  padding-left: 45px;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #797bec;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
  }
`;

const IconWrapper = styled.img`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  width: 25px;
  height: 25px;
`;

const ButtonForgotPassword = styled.button`
  cursor: pointer;
  width: 299px;
  height: 67px;
  background: #e3b4ab;
  border-radius: 50px;
  border: 0;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  margin: 50px auto 0 auto;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
`;

export const ForgotPassword = () => {
  const handlePasswordReset = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    const email = form.email.value;

    sendPasswordResetEmail(auth, email)
      .then(() => {
        form.reset();
        console.log("udalo sie!!!!!!!!");
      })
      .catch((e: FirebaseError) => {
        console.dir(e);
        alert(firebaseErrors[e.code]);
      });
  };

  return (
    <>
      <Header>Forgotten password?</Header>
      <TextInfo>
        We will send you a password reset link to your e-mail address
      </TextInfo>
      <FormForgotPassword onSubmit={handlePasswordReset}>
        <InputWrapper>
          <InputForgotPassword
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
          <IconWrapper src="/formIcons/mail.svg" />
        </InputWrapper>
        <ButtonForgotPassword>Send</ButtonForgotPassword>
      </FormForgotPassword>
    </>
  );
};
