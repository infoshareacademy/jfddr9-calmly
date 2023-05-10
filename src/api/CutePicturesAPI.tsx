import { useEffect, useState } from "react";

const API_URL_CAT = `https://api.thecatapi.com/v1/`;
const API_URL_DOG = `https://api.thedogapi.com/v1/`;
const API_URL_FOX = `https://randomfox.ca/floof`;
// const API_URL_MONKEY = `https://www.placemonkeys.com/500/350?random=1`;
// const API_URL_DUCK = `https://random-d.uk/api/v2/random`;
const API_KEY = "DEMO-API-KEY";

export const CutePictures = () => {
  return (
    <>
      <div>
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
          flexDirection: "row",
          gap: "100px",
        }}
      >
        <div>
          <button
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              background: "#CEC6C0",
              color: "#B2B3F0",
              border: "transparent",
              padding: "25px",
              borderRadius: "4px",
            }}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            Animals
          </button>
          {isOpen && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                background: "#E1B3AD",
              }}
            >
              {list.map((item) => (
                <div>
                  <button
                    style={{
                      background: "#CEC6C0",
                      color: "#B2B3F0",
                      borderRadius: "4px",
                      border: "transparent",
                    }}
                    onClick={() => getCutePicture(item.animal)}
                  >
                    {item.label}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img
            src={img}
            style={{
              width: "500px",
              height: "500px",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          />
          <button onClick={() => getCutePicture(category)}>New Picture</button>
        </div>
      </div>
    </>
  );
};
