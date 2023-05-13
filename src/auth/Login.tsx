import { NavLink } from "react-router-dom";

import styled from "styled-components";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../api/firebase";
import { firebaseErrors } from "../utils/firebaseErrors";

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

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const InputLogin = styled.input`
  height: 50px;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  border: 0;

  color: #797bec;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;

  ::placeholder {
    color: #797bec;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    padding-left: 10px;
  }
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
//do zmiany focus i active

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
      .then((jwt) => {
        form.reset();
        console.log(jwt);
        //redux lub UserProvider lub localStorage
      })

      .catch((e: any) => {
        console.dir(e);
        alert(firebaseErrors[e.code]);
      });
  };

  return (
    <>
      <Header>Sign in</Header>
      <FormLogin onSubmit={handleLogin}>
        <InputWrapper>
          <InputLogin
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />

          {!isPasswordHidden && (
            <InputLogin
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          )}
        </InputWrapper>
        <NavBarLink to="/forgotPassword">Forgot password?</NavBarLink>
        <ButtonLogin>Sign in</ButtonLogin>
      </FormLogin>
    </>
  );
};
