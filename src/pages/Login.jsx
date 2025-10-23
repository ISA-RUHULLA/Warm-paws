import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate, Link } from "react-router-dom";
import { Links, useLocation } from "react-router";
import toast from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";


const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signIn(email, password)
            .then((res) => {
                console.log("Logged in:", res.user);
                toast.success("Login successful ");
                navigate(from, { replace: true });
            })
            .catch((err) => {
                console.error(err.message);
                toast.error("Invalid email or password ");
            });

    };

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then((res) => {
                console.log("Google login:", res.user);
                toast.success("Logged in with Google ");
                navigate(from, { replace: true });
            })
            .catch((err) => {
                console.error(err.message);
                toast.error("Google sign-in failed ");
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
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <label className="label">Password</label>
                            <div className="relative">
                                <input type={showPassword ? "text" : "password"} name="password" className="input w-full" placeholder="Password" required />
                                <span
                                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </span>
                            </div>
                            <div className="mt-2">
                                <Link to="/auth/forget-password"
                                    className="text-blue-600 underline hover:text-blue-800"
                                >
                                    Forgot Password?
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
