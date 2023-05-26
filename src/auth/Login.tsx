import { NavLink } from "react-router-dom";

import styled from "styled-components";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../api/firebase";
import { firebaseErrors } from "../utils/firebaseErrors";
import { FirebaseError } from "firebase/app";

const Header = styled.p`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 600;
  font-size: 42px;
  line-height: 53px;
  text-align: center;
  margin-top: 90px;
  color: #797bec;
`;
const FormLogin = styled.form`
  font-family: "Outfit";
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

const AllInputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: left;
`;

const InputLogin = styled.input`
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

const InputWrapper = styled.div`
  position: relative;
`;

const IconWrapper = styled.img`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  width: 25px;
  height: 25px;
`;

const NavBarLink = styled(NavLink)`
color: #797BEC;
text-decoration: none;
font-family: 'Outfit';
font-style: normal;
font-weight: 400;
font-size: 14px;
margin-left: auto;
margin-top: 15px;

&:hover,
&:focus{
  color: blue;
}
&:active{
  color: blue;
`;

const ButtonLogin = styled.button`
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

export const Login = ({ isPasswordHidden = false }) => {
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    const email = form.email.value;
    const password = form.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        form.reset();
      })

      .catch((e: FirebaseError) => {
        console.dir(e);
        alert(firebaseErrors[e.code]);
      });
  };

  return (
    <>
      <Header>Sign in</Header>
      <FormLogin onSubmit={handleLogin}>
        <AllInputsWrapper>
          <InputWrapper>
            <InputLogin
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
            <IconWrapper src="/formIcons/mail.svg" />
          </InputWrapper>
          {!isPasswordHidden && (
            <InputWrapper>
              <InputLogin
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
              <IconWrapper src="/formIcons/lock.svg" />
            </InputWrapper>
          )}
        </AllInputsWrapper>
        <NavBarLink to="/forgotPassword">Forgot password?</NavBarLink>
        <ButtonLogin>Sign in</ButtonLogin>
      </FormLogin>
    </>
  );
};
