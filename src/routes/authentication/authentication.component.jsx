import SignUpForm from "../../component/sign-up-form/sign-up-form.component";
import SignInpForm from "../../component/sign-in-form/sign-in-form.component";

import "./authentication.styles.scss";

export default function Authentication() {
  return (
    <div className="authentication-container">
      <SignInpForm />
      <SignUpForm />
    </div>
  );
}
