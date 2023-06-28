import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";

const auth = getAuth(app);
export const signUp = (formData) => {
  createUserWithEmailAndPassword(auth, formData?.email, formData?.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};
