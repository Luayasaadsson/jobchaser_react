import SignUpForm from './SignUpForm';
import SignUpCSS from "./SignUpPage.module.css"


const SignUpPage: React.FC = () => {
  return (
    <div className={SignUpCSS.container}>
      <div className={SignUpCSS.signUpForm}>
        <h2>Sign Up</h2>
        <SignUpForm />
      </div>
    </div>
  );
}

export default SignUpPage;