import SignUpForm from './SignUpForm';
import Nav from "../../../components/Nav/Nav";
import SignUpCSS from "./SignUpPage.module.css"
import { useTheme } from "../../../context/useTheme";


const SignUpPage: React.FC = () => {
  const { theme } = useTheme(); 


  const signUpFormClassName = `${SignUpCSS.signUpForm} ${theme === 'light' ? SignUpCSS.light : SignUpCSS.dark}`;

  return (
    <div className={SignUpCSS.container}>
      <Nav />
      <div className={signUpFormClassName}>
        <h2 className={SignUpCSS.title}>Sign Up</h2>
        <SignUpForm />
      </div>
    </div>
  );
}

export default SignUpPage;