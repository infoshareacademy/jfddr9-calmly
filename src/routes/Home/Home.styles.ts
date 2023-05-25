import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  font-family: "Outfit", sans-serif;
  background-image: url("src/assets/grl_home.png");
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: right;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Outfit", sans-serif;
`;

// export const WrapperContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 600px;
//   position: absolute;
//   top: 130px;
//   right: 250px;
//   color: white;
// `;

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 110px;
  color: #797bec;
`;

export const WrapperText = styled.div`
  width: 900px;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const WrapperButtons = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
`;

export const Header = styled.div`
  margin-top: 60px;
  font-size: 56px;
  font-weight: 600;
  color: #e3b4ab;
  & span {
    font-weight: 700;
  }
`;

export const TextUnderHeader = styled.div`
  font-size: 30px;
  color: #797bec;
  font-weight: 200;

  & span {
    font-weight: 500;
  }
`;

export const Paragraph = styled.p`
  font-size: 18px;
  margin-bottom: 44px;
  margin-top: 44px;
  padding-right: 70px;
  text-align: justify;
  @media (max-width: 1750px) {
    max-width: 700px;
  }
  @media (max-width: 1550px) {
    max-width: 500px;
  }
  @media (max-width: 1350px) {
    max-width: 400px;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  width: 180px;
  height: 56px;
  border-radius: 50px;
  border: none;
  background: #797bec;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 40px;
  font-size: 16px;
  letter-spacing: 1px;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.2);
  font-family: "Outfit", sans-serif;

  &:hover {
    transition: 0.3s ease-in;
    opacity: 0.9;
    transform: scale(103%);
  }

  &:active {
    transition: 0.1s ease-in;
    transform: scale(99%);
  }

  // font-size: 18px;
  // border: none;
  // cursor: pointer;
  // width: 180px;
  // height: 36px;
  // border-radius: 50px;
  // background: #797bec;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // color: #fff;
  // text-transform: uppercase;
  // font-weight: 500;
  // padding: 24px;
  // box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.2);

  // &:hover {
  //   transition: 0.3s ease-in;
  //   opacity: 0.9;
  //   transform: scale(101%);
  // }

  // &:active {
  //   transition: 0.1s ease-in;
  //   transform: scale(99%);
  // }
`;
