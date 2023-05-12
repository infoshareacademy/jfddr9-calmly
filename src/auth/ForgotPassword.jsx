import { Form } from "../Form";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../api/firebase";
import { firebaseErrors } from "../../utils/firebaseErrors";

export const ForgotPassword = () => {
  const handlePasswordReset = (e) => {
    e.preventDefault();

    sendPasswordResetEmail(auth, e.target.email.value).catch((e) => {
      console.dir(e);
      alert(firebaseErrors[e.code]);
    });
  };

  return (
    <Form
      submitText="Poproś o przypomnienie hasła"
      isPasswordHidden
      onSubmit={handlePasswordReset}
    />
  );
};
