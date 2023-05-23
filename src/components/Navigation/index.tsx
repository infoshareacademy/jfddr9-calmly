import { auth } from "../../api/firebase";
import { signOut } from "firebase/auth";
import { useNavigate, useLocation } from "react-router-dom";

import styled from "styled-components";

interface NavLinkProps {
  isActive: boolean;
}

const StyledLogo = styled.div`
  position: absolute;
  top: 35px;
  left: 70px;
`;
const StyledImg = styled.img`
  height: 80px;
  cursor: pointer;
`;

export const Nav = styled.nav`
  z-index: 1000;
  height: 50px;
  font-family: "Outfit";
  font-style: normal;
  font-size: 20px;
  line-height: 30px;
  align-items: center;
  text-align: center;
  color: #ffffff;
  display: flex;
  gap: 40px;

  position: absolute;
  top: 45px;
  right: 40px;
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

  &:hover {
    transition: 0.3s ease-in;
    opacity: 0.9;
    transform: scale(103%);
  }

  &:active {
    transition: 0.3s ease-in;
    transform: scale(99%);
    color: #797bec;
  }

  &:hover {
    transition: 0.3s ease-in;
    opacity: 0.9;
    color: #797bec;
  }
`;

export const Navigation = ({ src }: any) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isFeelBetterPage = location.pathname === "/feelbetter";
  console.log(`isFeelBetter ${isFeelBetterPage}`);
  const isSupportPage = location.pathname === "/support";
  console.log(`isSupport ${isSupportPage}`);
  const isContactPage = location.pathname === "/contact";
  console.log(`isContactPage ${isContactPage}`);

  return (
    <>
      <StyledLogo>
        <a onClick={() => navigate("/home")}>
          <StyledImg src={src} alt="Calmly Logo" />
        </a>
      </StyledLogo>
      <Nav>
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
        <ButtonLogOut onClick={() => signOut(auth)}>Log out</ButtonLogOut>
      </Nav>
    </>
  );
};
