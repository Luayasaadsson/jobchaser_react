import { useForm } from "react-hook-form";
import {  Link, useNavigate } from "react-router-dom";
import {signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../../../Firebase/firebase"; 
/* import SignInFormCSS from "./SignInForm.module.css" */

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
                    <label className="block mt-2" htmlFor="email">Email:</label>
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
                    <label className="block mt-3" htmlFor="password">Password:</label>
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

                <button className="mt-3 w-20 h-8 rounded-lg border-none font-semibold cursor-pointer bg-gray-500 hover:bg-sky-300 mb-2" type="submit">Log in</button>
            </form>

            <Link className="no-underline text-inherit" to="/signup">Don't have an account? Sign Up</Link>
        </>
    );
};

export default SignInForm;