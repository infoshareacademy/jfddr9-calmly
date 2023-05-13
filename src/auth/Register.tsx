import { auth } from "../api/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseErrors } from "../utils/firebaseErrors";
import { FirebaseError } from "firebase/app";

export const Register = ({ isPasswordHidden = false }) => {
  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    const email = form.email.value;
    const password = form.password.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((jwt) => {
        form.reset();
        console.log(jwt);
        return jwt;
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
