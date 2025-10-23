import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";

const Register = () => {
    const { createUser, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

       
        const uppercase = /[A-Z]/.test(password);
        const lowercase = /[a-z]/.test(password);
        const minLength = password.length >= 6;

        if (!uppercase) {
            toast.error("Password must contain at least one uppercase letter (A-Z)");
            return;
        }
        if (!lowercase) {
            toast.error("Password must contain at least one lowercase letter (a-z)");
            return;
        }
        if (!minLength) {
            toast.error("Password must be at least 6 characters long");
            return;
        }

        
        createUser(email, password)
            .then((res) => {
                console.log("User created:", res.user);
                toast.success("Registration successful ✅");
                navigate("/");
            })
            .catch((err) => {
                console.error(err.message);
                toast.error(err.message);
            });
    };

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then((res) => {
                console.log("Google login:", res.user);
                toast.success("Logged in with Google ✅");
                navigate("/");
            })
            .catch((err) => {
                console.error(err.message);
                toast.error(err.message);
            });
    };

    return (
        <form onSubmit={handleRegister} className="card-body max-w-sm mx-auto">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" name="email" className="input" placeholder="Email" required />
                        <label className="label">Password</label>
                        <input type="password" name="password" className="input" placeholder="Password" required />
                        <button className="btn btn-neutral mt-4">Register Now</button>
                        <div>
                            <h2>
                                Already have an account?{" "}
                                <Link to="/auth/login" className="text-red-500">
                                    Login
                                </Link>
                            </h2>
                        </div>
                    </fieldset>
                </div>
                <div className="divider">OR</div>
                <button onClick={handleGoogleLogin} type="button" className="btn btn-outline w-full">
                    Continue with Google
                </button>
            </div>
        </form>
    );
};

export default Register;
