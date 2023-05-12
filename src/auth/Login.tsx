import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../api/firebase";
import { firebaseErrors } from "../utils/firebaseErrors";

export const Login = ({ isPasswordHidden = false }) => {
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    const email = form.email.value;
    const password = form.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((jwt) => {
        form.reset();
        console.log(jwt);
        //redux lub UserProvider lub localStorage
      })

      .catch((e: any) => {
        console.dir(e);
        alert(firebaseErrors[e.code]);
      });
  };

  return (
    <>
      <form onSubmit={handleLogin}>
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
        <button>SING IN</button>
      </form>
    </>
  );
};
