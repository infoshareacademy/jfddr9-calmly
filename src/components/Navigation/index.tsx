import { auth } from "../../api/firebase";
import { signOut } from "firebase/auth";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

import styled from "styled-components";

interface NavLinkProps {
  isActive: boolean;
}

const HamburgerButton = styled.img`
  position: absolute;
  top: 55px;
  right: 40px;
  display: none;
  cursor: pointer;
  height: 40px;

  @media (max-width: 950px) {
    display: block;
  }
`;

const StyledLogo = styled.div`
  position: absolute;
  top: 35px;
  left: 70px;
  @media (max-width: 950px) {
    top: 55px;
    left: 25px;
  }
`;
const StyledImg = styled.img`
  height: 80px;
  cursor: pointer;
  @media (max-width: 950px) {
    height: 30px;
  }
`;

export const Nav = styled.nav<{ isOpenMenu: boolean }>`
  z-index: 1000;
  height: 50px;
  font-family: "Outfit";
  font-style: normal;
  font-size: 20px;
  align-items: center;
  text-align: center;
  color: #ffffff;
  display: flex;
  gap: 40px;
  position: absolute;
  top: 45px;
  right: 40px;

  @media (max-width: 950px) {
    background-color: white;
    position: absolute;
    top: 95px;
    color: #797bec;
    padding: 20px;
    height: auto;
    border-radius: 10px;
    display: ${(props) => (props.isOpenMenu ? "block" : "none")};
  }
`;

export const NavLink = styled.a<NavLinkProps>`
  font-size: 20px;
  font-family: "Outfit";
  font-weight: ${({ isActive }) => (isActive ? "700" : "300")};
  cursor: pointer;
  &:active {
    transition: 0.1s ease-in;
    color: #797bec;
  }

  &:hover {
    transition: 0.1s ease-in;
    opacity: 0.9;
    color: #797bec;
  }

  @media (max-width: 950px) {
    display: block;
    padding-bottom: 20px;
  }
`;

export const ButtonLogOut = styled.button`
  cursor: pointer;
  font-family: "Outfit";
  border: none;
  width: 105px;
  height: 34px;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: 400;
  font-size: 20px;
  padding: 18px 18px 20px;
  margin: 0 auto;

  &:hover {
    transition: 0.3s ease-in;
    opacity: 0.9;
    transform: scale(103%);
    color: #797bec;
  }

  &:active {
    transition: 0.3s ease-in;
    transform: scale(99%);
    color: #797bec;
  }
  @media (max-width: 950px) {
    color: #797bec;
    background: rgb(121 123 236 / 8%);
  }
`;

export const Navigation = ({ src, srcHamburger }: any) => {
  const navigate = useNavigate();
  const location = useLocation();

  const { authUser }: any = useSelector((state) => state);

  const showButton = authUser.fullName != null;

  const isFeelBetterPage = location.pathname === "/feelbetter";
  const isSupportPage = location.pathname === "/support";
  const isContactPage = location.pathname === "/contact";

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <>
      <StyledLogo>
        <a onClick={() => navigate("/home")}>
          <StyledImg src={src} alt="Calmly Logo" />
        </a>
      </StyledLogo>
      <Nav isOpenMenu={isOpenMenu}>
        <NavLink
          isActive={isFeelBetterPage}
          onClick={() => navigate("/feelbetter")}
        >
          Let's feel better
        </NavLink>
        <NavLink isActive={isSupportPage} onClick={() => navigate("/support")}>
          Support
        </NavLink>
        <NavLink isActive={isContactPage} onClick={() => navigate("/contact")}>
          Contact
        </NavLink>
        {showButton && (
          <ButtonLogOut onClick={() => signOut(auth)}>Log out</ButtonLogOut>
        )}
      </Nav>
      {console.log(`srcHamburger: ${srcHamburger}`)}
      <HamburgerButton src={srcHamburger} onClick={toggleMenu} />
    </>
  );
};
