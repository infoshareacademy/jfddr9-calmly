import { auth } from "../api/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseErrors } from "../utils/firebaseErrors";
import { FirebaseError } from "firebase/app";

import { db } from "../api/firebase";
import { setDoc, doc } from "firebase/firestore";

export const Register = ({ isPasswordHidden = false }) => {
  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    const fullName = form.fullName.value;
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
          id: userId,
        }).then(() => console.log("udalo sie"));
      })

      .catch((e: FirebaseError) => {
        console.dir(e);
        alert(firebaseErrors[e.code]);
      });
  };

  return (
    <>
      <form onSubmit={handleRegister}>
        <div>
          <input type="text" name="fullName" id="fullName" placeholder="Name" />
          <input type="email" name="email" id="email" placeholder="Email" />
        </div>
        {!isPasswordHidden && (
          <div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>
        )}
        <button>SING UP</button>
      </form>
    </>
  );
};
