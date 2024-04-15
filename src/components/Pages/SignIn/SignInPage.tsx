import React from "react";
import SignInForm from "./SignInForm";
import Nav from "../../../components/Nav/Nav";
import SignInCSS from "./SignInPage.module.css";
import { useTheme } from "../../../context/useTheme";

const SignInPage: React.FC = () => {
  const { theme } = useTheme();

  const signInFormClassName = `${SignInCSS.signInForm} ${
    theme === "light" ? SignInCSS.light : SignInCSS.dark
  }`;

  return (
    <div className={SignInCSS.container}>
      <Nav />
      <div className={signInFormClassName}>
        <h2 className={SignInCSS.title}>Sign In</h2>
        <SignInForm />
      </div>
    </div>
  );
};

export default SignInPage;
