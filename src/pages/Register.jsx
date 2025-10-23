import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Link, useNavigate } from "react-router";

const Register = () => {
    const { createUser, signInWithGoogle } = useContext(AuthContext);
    const Navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUser(email, password)
            .then(res => console.log("User created:", res.user))
            .catch(err => console.error(err.message));
    };

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then((res) => {
                console.log("Google login:", res.user);
                Navigate("/"); // redirect to homepage
            })
            .catch((err) => console.error(err.message));
    };

    return (
        <form onSubmit={handleRegister} className="card-body max-w-sm mx-auto">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name="password" className="input" placeholder="Password" />
                                <button className="btn btn-neutral mt-4">Register Now</button>
                                <div><h2>Already have an account? <Link to='/auth/login' className="text-red-500">Login</Link> </h2></div>
                            </fieldset>
                        </div>
                        <div className="divider">OR</div>
                    <button onClick={handleGoogleLogin} className="btn btn-outline w-full">
                        Continue with Google
                    </button>
                    </div>         
        </form>
    );
};

export default Register;
