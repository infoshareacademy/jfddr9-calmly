import styled from "styled-components";
import { useEffect } from "react";

import { Register } from "../auth/Register";

import { updateBg } from "../store/slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const MainWrapper = styled.div`
  font-family: "Outfit";
  display: flex;
  justify-content: center;
  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LeftCardWrapper = styled.div`
  width: 530px;
  height: 688px;
  margin: 15px;
  padding: 0 60px;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 15px 25px 25px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  @media (max-width: 950px) {
    width: 325px;
  }
`;

const RightCardWrapper = styled.div`
  min-width: 445px;
  max-width: 445px;
  height: 688px;
  margin: 15px;
  background: rgba(255, 255, 255, 0.55);
  box-shadow: 15px 25px 25px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
`;
const NavWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin-top: 30px;
`;

const NavText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #797bec;
`;

const NavButton = styled.button`
  cursor: pointer;
  width: 70px;
  height: 30px;
  font-family: "Outfit";
  background: #ffffff;
  border-radius: 50px;
  border: 0;
  margin-top: 5px;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  text-align: center;
  color: #797bec;
`;

const LogoMain = styled.img`
  width: 270px;
  height: 85.27px;
  margin: 80px auto 80px;
`;

const Graphic = styled.img`
  width: 310px;
  height: 310px;
  margin: 0 auto;
`;

const TextFooter = styled.p`
  font-weight: 400;
  font-size: 28px;
  text-align: center;
  margin-top: 30px;
  color: #797bec;
`;

export const RegisterPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateBg("bgDefault"));
  }, [dispatch]);

  const navigate = useNavigate();

  return (
    <MainWrapper>
      <LeftCardWrapper>
        <NavWrapper>
          <NavText>Already have an account?</NavText>
          <NavButton onClick={() => navigate("/login")}>Sign in</NavButton>
        </NavWrapper>
        <Register />
      </LeftCardWrapper>
      <RightCardWrapper>
        <LogoMain src="/logo.png" alt="Calmly logo" />
        <Graphic
          src="/catti_register.svg"
          alt="An illustration of a cat saying 'Hi!'"
        />
        <TextFooter>let your stress drop</TextFooter>
      </RightCardWrapper>
    </MainWrapper>
  );
};
