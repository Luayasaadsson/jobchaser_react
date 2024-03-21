import SignInForm from './SignInForm';
import SignInCSS from "./SignInPage.module.css"

const SignInPage: React.FC = () => {
  return (
    <div className={SignInCSS.container}>
      <div className={SignInCSS.signInForm}>
        <h2>Sign In</h2>
        <SignInForm />
      </div>
    </div>
  );
}


export default SignInPage;