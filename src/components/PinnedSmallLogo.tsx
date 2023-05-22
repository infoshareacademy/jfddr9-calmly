import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import calmly from "../assets/logo-white.png";
const StyledLogo = styled.div`
  position: absolute;
  top: 30px;
  left: 40px;
`;
const StyledImg = styled.img`
  height: 40px;
  cursor: pointer;
`;

export const PinnedSmallLogo = () => {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/home");
  };
  return (
    <StyledLogo>
      <a onClick={handleLogoClick}>
        <StyledImg src={calmly} alt="Calmly Logo" />
      </a>
    </StyledLogo>
  );
};
