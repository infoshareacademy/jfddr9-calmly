import styled from "styled-components";

import { auth } from "../api/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseErrors } from "../utils/firebaseErrors";
import { FirebaseError } from "firebase/app";

import { db } from "../api/firebase";
import { setDoc, doc } from "firebase/firestore";
// import {useState} from 'react'

const Header = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  text-align: center;
  margin-top: 80px;
  color: #797bec;
`;

const FormRegister = styled.form`
  font-family: "Outfit";
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const InputRegister = styled.input`
  height: 50px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  border: 0;
  color: #797bec;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;

  ::placeholder {
    color: #797bec;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    padding-left: 10px;
  }
`;

const ButtonRegister = styled.button`
  cursor: pointer;
  width: 299px;
  height: 67px;
  background: #e3b4ab;
  border-radius: 50px;
  border: 0;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 32px;
  margin: 70px auto 0 auto;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
`;

// const useCountry = () => {
//   const[country] = useState(() => {
//     return window.navigator.language.slice(3,5)
//   })
// return country
// }

export const Register = ({ isPasswordHidden = false }) => {
  // const defaultCountry = useCountry()

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    const fullName = form.fullName.value;
    // const country = form.country.value
    const email = form.email.value;
    const password = form.password.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        form.reset();
        const userId = userCredential.user.uid;
        console.log(userCredential);

        const docRef = doc(db, "users", userId);
        setDoc(docRef, {
          email,
          fullName,
          // country,
          id: userId,
        })
          .then(() => console.log("udalo sie"))
          .then(() => {
            const docRef = doc(db, "journal", userId);
            setDoc(docRef, {
              entries: [],
            }).then(() => console.log("udalo sie journal"));
          });
      })

      .catch((e: FirebaseError) => {
        console.dir(e);
        alert(firebaseErrors[e.code]);
      });
  };

  return (
    <>
      <Header>Create Account</Header>
      <FormRegister onSubmit={handleRegister}>
        <InputWrapper>
          <InputRegister
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Name"
          />
          <InputRegister
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />

          {/* <select name="country">
          <option value={defaultCountry}></option>
          <option value='PL'>PL</option>
          <option value='GB' selected>GB</option>
          <option value='DE'>DE</option>
        </select> */}
          {!isPasswordHidden && (
            <InputRegister
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          )}
        </InputWrapper>
        <ButtonRegister>Sign up</ButtonRegister>
      </FormRegister>
    </>
  );
};
