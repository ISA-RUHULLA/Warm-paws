import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import { Eye, EyeOff } from "lucide-react";
import { div } from "motion/react-client";

const Register = () => {
    const { createUser, signInWithGoogle } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoURL = e.target.photoURL.value;
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
                const user = res.user;


                updateProfile(user, {
                    displayName: name,
                    photoURL: photoURL || "",
                })
                    .then(() => {
                        toast.success("Registration successful");
                        navigate("/");
                    })
                    .catch((err) => {
                        console.error("Profile update error:", err.message);
                        toast.error("Profile update failed!");
                    });
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
                toast.success("Logged in with Google");
                navigate("/");
            })
            .catch((err) => {
                console.error(err.message);
                toast.error(err.message);
            });
    };

    return (
        <div className="bg-white">
            <form onSubmit={handleRegister} className="card-body max-w-sm mx-auto">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold">Register</h2>
                        <fieldset className="fieldset">
                            <label className="label">Name</label>
                            <input type="text" name="name" className="input" placeholder="Your Name" required />
                            <label className="label">Email</label>
                            <input type="text" name="photoURL" className="input" placeholder="Photo URL (optional)" />
                            <label className="label">Email</label>
                            <input type="email" name="email" className="input" placeholder="Email" required />
                            <label className="label">Password</label>
                            <div className="relative">
                                <input type={showPassword ? "text" : "password"} name="password" className="input" placeholder="Password" required />
                                <span
                                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </span>
                            </div>
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
                    <button onClick={handleGoogleLogin} type="button" className="btn bg-white text-black border-[#e5e5e5] mb-6 mx-6">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Register;
