import styled from "styled-components";

import { auth } from "../api/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseErrors } from "../utils/firebaseErrors";
import { FirebaseError } from "firebase/app";

import { db } from "../api/firebase";
import { setDoc, doc } from "firebase/firestore";
// import {useState} from 'react'

const FormRegister = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputRegister = styled.input`
  width: 518px;
  height: 50px;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
`;

const ButtonRegister = styled.button`
  width: 299px;
  height: 67px;
  background: #e3b4ab;
  border-radius: 50px;

  // font-family: 'Outfit';
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 32px;
  /* identical to box height */

  text-align: center;

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
        }).then(() => console.log("udalo sie"));
      })

      .catch((e: FirebaseError) => {
        console.dir(e);
        alert(firebaseErrors[e.code]);
      });
  };

  //wyrzucic id

  return (
    <>
      <FormRegister onSubmit={handleRegister}>
        <div>
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
        </div>
        {/* <select name="country">

        {countries.map(({  }, index) => (
        <option value={} name={name}  index={index} key={name} />{}</option>
      ))}

          <option value={defaultCountry}></option>
          <option value='PL'>PL</option>
          <option value='GB' selected>GB</option>
          <option value='DE'>DE</option>
        </select> */}
        {!isPasswordHidden && (
          <div>
            <InputRegister
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>
        )}
        <ButtonRegister>SING UP</ButtonRegister>
      </FormRegister>
    </>
  );
};
