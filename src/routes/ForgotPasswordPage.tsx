import styled from "styled-components";
import { useEffect } from "react";

import { NavLink } from "react-router-dom";
import { GraphicsCard } from "../components/GraphicsCard";
import { ForgotPassword } from "../auth/ForgotPassword";

import { updateBg } from "../store/slice";
import { useDispatch } from "react-redux";

const MainWrapper = styled.div`
  font-family: "Outfit";
  display: flex;
  justify-content: center;
`;

const LeftCardWrapper = styled.div`
  max-width: 301px;
  min-width: 325px;
  height: 688px;
  margin: 15px;
  padding: 0px 60px;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 15px 25px 25px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
`;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin-top: 120px;
`;

const TextFooter = styled.p`
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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateBg("bgDefault"));
  }, [dispatch]);

  return (
    <MainWrapper>
      <LeftCardWrapper>
        <ForgotPassword />
        <FooterWrapper>
          <TextFooter>Do not have an account?</TextFooter>
          <NavBarLink to="/register">Sign up</NavBarLink>
        </FooterWrapper>
      </LeftCardWrapper>
      <GraphicsCard src="../src/assets/catti_forgot.svg" />
    </MainWrapper>
  );
};
