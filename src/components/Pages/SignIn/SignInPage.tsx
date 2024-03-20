import SignInForm from './SignInForm';
import SignInCSS from "./SignIn.module.css"

const SignInPage: React.FC = () => {
  return (
    <div className={SignInCSS.container}>
      <div className={SignInCSS.signInForm}>
        <h1>Sign In</h1>
        <SignInForm />
      </div>
    </div>
  );
}


export default SignInPage;