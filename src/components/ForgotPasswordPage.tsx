import styled from "styled-components";

import { NavLink } from "react-router-dom";

import { GraphicsCard } from "./GraphicsCard";
import { ForgotPassword } from "../auth/ForgotPassword";

const MainWrapper = styled.div`
  font-family: "Outfit";
  display: flex;
  justify-content: center;
`;

const ForgotPasswordCardWrapper = styled.div`
  max-width: 301px;
  height: 688px;
  margin: 15px;
  padding: 0px 60px;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 15px 25px 25px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
`;

const FooterWrapperForgotPasswordCard = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin-top: 120px;
`;

const FooterParagraphForgotPasswordCard = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #797bec;
  margin: 0;
`;
const NavBarLink = styled(NavLink)`
color: #797BEC;
text-decoration: none;
font-family: 'Outfit';
font-style: normal;
font-weight: 700;
font-size: 16px;

&:hover,
&:focus{
   color: blue; 
}
&:active{
   color: blue; 
`;
//do zmiany kolor hover i active

export const ForgotPasswordPage = () => {
  return (
    <MainWrapper>
      <ForgotPasswordCardWrapper>
        <ForgotPassword />
        <FooterWrapperForgotPasswordCard>
          <FooterParagraphForgotPasswordCard>
            Do not have an account?
          </FooterParagraphForgotPasswordCard>
          <NavBarLink to="/register">Sign up</NavBarLink>
        </FooterWrapperForgotPasswordCard>
      </ForgotPasswordCardWrapper>
      <GraphicsCard />
    </MainWrapper>
  );
};
