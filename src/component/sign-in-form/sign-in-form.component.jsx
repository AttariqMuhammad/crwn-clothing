import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { useState, useContext } from "react";

import { UserContext } from "../../contexts/user.context";

import "./sign-in-form.styles.scss";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../assets/firebase/firebase.utils";
import { async } from "@firebase/util";

const defaultFormFields = { email: "", password: "" };

export default function SignInpForm() {
  //use state form field
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  //use context userContext
  const { setCurrentUser, currentUser } = useContext(UserContext);

  const logGoogleUser = async () => {
    // to see response
    // const response = await signInWithGooglePopup();
    // console.log(response);
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
    console.log(formFields);
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormFields();
      console.log("sign in success");
    } catch (error) {
      console.log("user sign in error".error);
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account ?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          value={email}
          onChange={handleChange}
          name="email"
        />
        <FormInput
          label="Password"
          type="password"
          required
          value={password}
          onChange={handleChange}
          name="password"
        />

        <div className="button-sign-in-container">
          <Button type="submit">Sign In</Button>

          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={logGoogleUser}
          >
            Google
          </Button>
        </div>
      </form>
    </div>
  );
}
