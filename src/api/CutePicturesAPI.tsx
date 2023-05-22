import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { updateBg } from "../store/slice";
import { LoaderComponent } from "../components/Loader";
import { PinnedSmallLogo } from "../components/PinnedSmallLogo";

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
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  padding: 5px 40px;

  &:hover {
    background: #52526b;
    color: #ffff;
  }
`;

const StyledNewPicButton = styled.button`
  background: rgba(255, 255, 255, 0.45);
  color: #797bec;
  border: transparent;
  border-radius: 50px;
  cursor: pointer;
  margin-bottom: 20px;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 25px;
  text-align: center;
  padding: 2px 10px;

  &:hover {
    background: #52526b;
    color: #ffff;
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
  line-height: 25px;
  text-align: center;
  padding: 5px 40px;

  &:hover {
    background: #52526b;
    color: #ffff;
  }
`;

const StyledImg = styled.img`
  max-width: 1500px;
  height: 500px;
  background-size: cover;
  background-repeat: no-repeat;
  background: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 24px;
  box-shadow: 15px 25px 25px rgba(0, 0, 0, 0.2);
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

  dispatch(updateBg("bgDefault")); //upewnienie się, że tło jest odpowiednie

  useEffect(() => {
    getCutePicture("Dog");
  }, []);

  const getCutePicture = (animal: string) => {
    console.log(animal);
    if (animal === "Dog") {
      console.log("step 1");
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
          console.log(data);
          let imagesData = data;
          imagesData.map(function (imageData: { url: string }) {
            setImg(imageData.url);
            setCategory("Dog");
            setIsOpen(false);
            setIsLoading(false);
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    } else if (animal === "Cat") {
      console.log("step 2");
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
          console.log(data);
          let imagesData = data;
          imagesData.map(function (imageData: { url: string }) {
            setImg(imageData.url);
            setCategory("Cat");
            setIsOpen(false);
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    } else if (animal === "Fox") {
      console.log("step 3");
      const url = API_URL_FOX;

      fetch(url, {})
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setImg(data.image);
          setCategory("Fox");
          setIsOpen(false);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <>
      <PinnedSmallLogo />
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
            generate new picture
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                {list.map((item) => (
                  <div>
                    <StyledCategoryButton
                      onClick={() => getCutePicture(item.animal)}
                    >
                      {item.label}
                    </StyledCategoryButton>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {isLoading ? (
            <LoaderComponent />
          ) : (
            <StyledImg src={img} alt="A picture of either a dog, cat or fox" />
          )}
        </div>
      </div>
    </>
  );
};
