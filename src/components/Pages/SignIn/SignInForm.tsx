import { useForm } from "react-hook-form";
import {  Link, useNavigate } from "react-router-dom";
import {signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../../../Firebase/firebase"; 
import SignInFormCSS from "./SignInForm.module.css"

type FormData = {
    email: string;
    password: string;
};

const SignInForm: React.FC = () => {

    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>();

    const formSubmit = (data: FormData) => {

        console.log("Form Submitted: ", data);
        const {email, password} = data;
     
         signInWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
         // Signed in 
         const user = userCredential.user;
         console.log("User signed in: ", user);
         navigate("/");
         })
         .catch((error) => {
        console.error("Error creating user:", error);
      });
     
    
      };
    return (
        <>
            <form onSubmit={handleSubmit(formSubmit)}>
                <div>
                    <label className={SignInFormCSS.signinformspan} htmlFor="email">Email:</label>
                    <input
                        id="email"
                        type="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "Invalid email address"
                            }
                        })}
                    />
                    {errors.email && <span>{errors.email.message}</span>}
                </div>

                <div>
                    <label className={SignInFormCSS.signinformspan} htmlFor="password">Password:</label>
                    <input
                        id="password"
                        type="password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 8,
                                message: "Password must be at least 8 characters"
                            }
                        })}
                    />
                    {errors.password && <span>{errors.password.message}</span>}
                </div>

                <button className={SignInFormCSS.signinformsbutton} type="submit">Log in</button>
            </form>

            <Link className={SignInFormCSS.signinformslink} to="/signup">Don't have an account? Sign Up</Link>
        </>
    );
};

export default SignInForm;