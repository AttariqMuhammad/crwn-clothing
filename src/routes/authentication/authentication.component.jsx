import SignUpForm from "../../component/sign-up-form/sign-up-form.component";
import SignInpForm from "../../component/sign-in-form/sign-in-form.component";

import { AuthenticationContainer } from "./authentication.styles";

export default function Authentication() {
  return (
    <AuthenticationContainer>
      <SignInpForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
}
