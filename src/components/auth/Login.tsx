import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../api/firebase";
import { getFormData } from "../Form";
import { Form } from "../Form";

export const Login = () => {
  const handleLogin = (event): any => {
    event.preventDefault();
    const { email, password } = getFormData(event);
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        event.target.reset();
        console.log(user);
      })
      .catch((e) => {
        console.dir(e);
        alert(e);
      });
  };

  return <Form submitText="Log In" onSubmit={handleLogin} />;
};
