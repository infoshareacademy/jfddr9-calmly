import { getFormData } from "../Form";
import { Form } from "../Form";
import { auth, db } from "../api/firebase";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export const Register = () => {
  const handleRegister = (event) => {
    event.preventDefault();
    const { email, password } = getFormData(event);

    // const emailValue = event.target.email.value;
    // const ageValue = event.target.age.value;
    // const fullNameValue = event.fullName.email.value;

    // console.log(emailValue);

    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        event.target.reset();
        console.log(user);
        // const userRef = doc(db, "user", user.user.uid);
        // return setDoc(userRef, { name: fullNameValue, age: ageValue, email: email });
      })
      .then(() => {
        return signOut(auth);
      })
      .then(() => {
        alert("Registered");
      })
      .catch((e) => {
        console.dir(e);
        alert(e);
      });
  };

  //   return (
  //     <>
  //       <form onSubmit={handleRegister}>
  //         <div>
  //           <label htmlFor="fullName">Name</label>
  //           <input type="fullName" name="fullName" id="fullName" />
  //         </div>
  //         <div>
  //           <label htmlFor="age">Age</label>
  //           <input type="age" name="age" id="age" />
  //         </div>
  //         <div>
  //           <label htmlFor="email">Email</label>
  //           <input type="email" name="email" id="email" />
  //         </div>
  //         <div>
  //           <label htmlFor="password">Password</label>
  //           <input type="password" name="password" id="password" />
  //         </div>
  //         <button>Register</button>
  //       </form>
  //     </>
  //   );
  return <Form submitText="Register" onSubmit={handleRegister} />;
};
