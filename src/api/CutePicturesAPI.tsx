import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { updateBg } from "../store/slice";
import { LoaderComponent } from "../components/Loader";

const API_URL_CAT = `https://api.thecatapi.com/v1/`;
const API_URL_DOG = `https://api.thedogapi.com/v1/`;
const API_URL_FOX = `https://randomfox.ca/floof`;
const API_KEY = "DEMO-API-KEY";

const StyledAnimalButton = styled.button`
  background: rgba(255, 255, 255, 0.45);
  color: #797bec;
  border: transparent;
  border-radius: 50px;
  margin: 0 auto;
  cursor: pointer;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 25px;
  text-align: center;
  height: 41px;
  width: 217px;
  &:hover {
    background: white;
    transition: 0.2s;
  }
  @media only screen and (min-width: 500px) and (max-width: 1580px) {
    font-size: 20px;
    height: 35px;
    width: 200px;
    margin: -5px auto;
  }
`;

const StyledNewPicButton = styled.button`
  background: rgba(255, 255, 255, 0.45);
  color: #797bec;
  border: transparent;
  border-radius: 100px;
  cursor: pointer;
  margin-bottom: 20px;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  padding: 12px 8px;

  &:hover {
    background: white;
    transition: 0.2s;
  }
`;

const StyledCategoryButton = styled.button`
  background: rgba(255, 255, 255, 0.45);
  color: #797bec;
  border: transparent;
  border-radius: 50px;
  cursor: pointer;
  margin: 10px;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  padding: 6px 40px;

  &:hover {
    background: white;
    transition: 0.2s;
  }

  @media (max-width: 400px) {
    padding: 6px 30px;
  }

  @media (max-width: 350px) {
    margin: 5px;
  }
`;

const StyledImg = styled.img`
  max-width: 1500px;
  min-width: 500px;
  height: 500px;
  background-size: cover;
  background-repeat: no-repeat;
  background: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 24px;
  box-shadow: 15px 25px 25px rgba(0, 0, 0, 0.2);
  @media only screen and (min-width: 1200px) and (max-width: 1580px) {
    max-width: 1200px;
    height: 370px;
  }
  @media only screen and (min-width: 550px) and (max-width: 1200px) {
    max-width: 550px;
    height: 350px;
  }
  @media (max-width: 550px) {
    padding: 10px;
    max-width: 300px;
    min-width: 50px;
    height: 200px;
  }
`;

const StyledDivBox = styled.div`
  display: flex;
  justify-content: center;
  height: 500px;
  width: 500px;
  padding: 20px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 15px 25px 25px rgba(0, 0, 0, 0.2);
`;

const StyledDogCatFoxCategoryButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 350px) {
    flex-direction: column;
  }
`;

export const CutePictures = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignSelf: "center",
          height: "100%",
        }}
      >
        <Dropdown />
      </div>
    </>
  );
};

const list = [
  {
    animal: "Dog",
    label: "dog",
  },
  {
    animal: "Cat",
    label: "cat",
  },
  {
    animal: "Fox",
    label: "fox",
  },
];

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [img, setImg] = useState("");
  const [category, setCategory] = useState("Dog");
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  dispatch(updateBg("bgDefault"));

  useEffect(() => {
    getCutePicture("Dog");
  }, []);

  const getCutePicture = (animal: string) => {
    if (animal === "Dog") {
      const url = `${API_URL_DOG}images/search?limit=1`;

      fetch(url, {
        headers: {
          "x-api-key": API_KEY,
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          let imagesData = data;
          imagesData.map(function (imageData: { url: string }) {
            setImg(imageData.url);
            setCategory("Dog");
            setIsOpen(false);
            setIsLoading(false);
          });
        })
        .catch(function (error) {
          console.error(error);
        });
    } else if (animal === "Cat") {
      const url = `${API_URL_CAT}images/search?limit=1`;

      fetch(url, {
        headers: {
          "x-api-key": API_KEY,
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          let imagesData = data;
          imagesData.map(function (imageData: { url: string }) {
            setImg(imageData.url);
            setCategory("Cat");
            setIsOpen(false);
            setIsLoading(false);
          });
        })
        .catch(function (error) {
          console.error(error);
        });
    } else if (animal === "Fox") {
      const url = API_URL_FOX;

      fetch(url, {})
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setImg(data.image);
          setCategory("Fox");
          setIsOpen(false);
          setIsLoading(false);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column-reverse",
          margin: "0 auto",
          gap: "15px",
          alignSelf: "center",
        }}
      >
        <div>
          <StyledNewPicButton onClick={() => getCutePicture(category)}>
            new
          </StyledNewPicButton>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingBottom: "10px",
            }}
          >
            <StyledAnimalButton onClick={() => setIsOpen((prev) => !prev)}>
              animals
            </StyledAnimalButton>
            {isOpen && (
              <StyledDogCatFoxCategoryButton>
                {list.map((item) => (
                  <div>
                    <StyledCategoryButton
                      onClick={() => getCutePicture(item.animal)}
                    >
                      {item.label}
                    </StyledCategoryButton>
                  </div>
                ))}
              </StyledDogCatFoxCategoryButton>
            )}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {isLoading ? (
            <StyledDivBox>
              <LoaderComponent key={category} />
            </StyledDivBox>
          ) : (
            <StyledImg src={img} alt="A picture of either a dog, cat or fox" />
          )}
        </div>
      </div>
    </>
  );
};
