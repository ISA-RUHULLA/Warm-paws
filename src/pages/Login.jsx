import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate, Link } from "react-router-dom";
import Register from "./Register";
import { Links } from "react-router";
import toast from "react-hot-toast";

const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signIn(email, password)
            .then((res) => {
                console.log("Logged in:", res.user);
                navigate("/"); // redirect to homepage after login
            })
            .catch((err) => {
                console.error(err.message);
                toast.error("Invalid email or password ❌");
            });

    };

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then((res) => {
                console.log("Google login:", res.user);
                navigate("/"); // redirect to homepage
            })
            .catch((err) => {
                console.error(err.message);
                toast.error("Google sign-in failed ❌");
            });
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleLogin}>
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="input input-bordered w-full"
                                placeholder="Email"
                                required
                            />
                            <label className="label">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="input input-bordered w-full"
                                placeholder="Password"
                                required
                            />
                            <div className="mt-2">
                                <Link to="/auth/forget-password" className="link link-hover text-sm">
                                    Forgot password?
                                </Link>
                            </div>
                            <button className="btn btn-neutral mt-4 w-full">Login</button>
                        </fieldset>
                    </form>
                    <div>
                        <h2>Don't have an account? <Link to='/auth/register' className="text-red-500">Register</Link> </h2>
                    </div>
                    <div className="divider">OR</div>
                    <button onClick={handleGoogleLogin} className="btn btn-outline w-full">
                        Continue with Google
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Login;
