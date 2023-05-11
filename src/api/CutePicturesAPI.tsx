import { useEffect, useState } from "react";
import styled from "styled-components";

const API_URL_CAT = `https://api.thecatapi.com/v1/`;
const API_URL_DOG = `https://api.thedogapi.com/v1/`;
const API_URL_FOX = `https://randomfox.ca/floof`;
// const API_URL_MONKEY = `https://www.placemonkeys.com/500/350?random=1`;
// const API_URL_DUCK = `https://random-d.uk/api/v2/random`;
const API_KEY = "DEMO-API-KEY";

const StyledAnimalButton = styled.button`
  background: rgba(255, 255, 255, 0.45);
  color: #797bec;
  border: transparent;
  border-radius: 50px;
  margin: 0 auto;
  width: 60px;
  height: 20px;
  cursor: pointer;
`;

const StyledNewPicButton = styled.button`
  background: rgba(255, 255, 255, 0.45);
  color: #797bec;
  border: transparent;
  border-radius: 50px;
  margin: 0 auto;
  width: 60;
  height: 20px;
  cursor: pointer;
  margin-bottom: 20px;
`;

const StyledImg = styled.img`
  width: 100px;
  height: 100px;
  background-size: contain;
  background-repeat: no-repeat;
  background: rgba(255, 255, 255, 0.8);
  padding: 5px;
  border-radius: 4px;
  box-shadow: 15px 25px 25px rgba(0, 0, 0, 0.2);
`;

const StyledCategoryButton = styled.button`
  background: rgba(255, 255, 255, 0.45);
  color: #797bec;
  border: transparent;
  border-radius: 50px;
  margin: 0 auto;
  width: 60px;
  height: 20px;
  cursor: pointer;
  margin: 10px;
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
    label: "Dog 🐶",
  },
  {
    animal: "Cat",
    label: "Cat 🐱",
  },
  {
    animal: "Fox",
    label: "Fox 🦊",
  },
  //   {
  //     animal: "Monkey",
  //     label: "Monkey 🐒",
  //   },
  //   {
  //     animal: "Duck",
  //     label: "Duck 🐒",
  //   },
];

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [img, setImg] = useState("");
  const [category, setCategory] = useState("Dog");

  useEffect(() => {
    getCutePicture("Dog");
  }, []);

  const getCutePicture = (animal: string) => {
    console.log(animal);
    // START OF DOG
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
          imagesData.map(function (imageData: { url: any }) {
            setImg(imageData.url);
            setCategory("Dog");
            setIsOpen(false);
          });
        })
        .catch(function (error) {
          console.log(error);
        });
      // START OF CAT
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
          imagesData.map(function (imageData: { url: any }) {
            setImg(imageData.url);
            setCategory("Cat");
            setIsOpen(false);
          });
        })
        .catch(function (error) {
          console.log(error);
        });
      // START OF FOX
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
      // START OF MONKEY
    }
    // else if (animal === "Monkey") {
    //   console.log("step 4");
    //   const url = API_URL_MONKEY;

    //   fetch(url, {
    //     mode: "no-cors",
    //   })
    //     .then((data) => {
    //       console.log(data);
    //       setImg(url);
    //       setCategory("Monkey");
    //       setIsOpen(false);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // }
    // else if (animal === "Duck") {
    //   console.log("step 5");
    //   const url = API_URL_DUCK;

    //   fetch(API_URL_DUCK, {
    //     // method: "GET",
    //     mode: "no-cors",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
    //     .then((response) => {
    //       //   console.log(response.text());
    //       //   console.log(response);
    //       return response;
    //     })
    //     .then((data) => {
    //       console.log(data);
    //       setImg(data.url || "");
    //       setCategory("Duck");
    //       setIsOpen(false);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column-reverse",
          margin: "0 auto",
          gap: "20px",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column-reverse",
              paddingBottom: "10px",
            }}
          >
            <StyledAnimalButton onClick={() => setIsOpen((prev) => !prev)}>
              Animals
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
          <StyledNewPicButton onClick={() => getCutePicture(category)}>
            New Picture
          </StyledNewPicButton>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <StyledImg src={img} />
        </div>
      </div>
    </>
  );
};
