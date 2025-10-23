import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import toast from "react-hot-toast";
import { Link } from "react-router";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");

    const handleReset = (e) => {
        e.preventDefault();

        if (!email) {
            toast.error("Please enter your email!");
            return;
        }

        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.success("Password reset email sent ✅ Check your inbox!");
            })
            .catch((err) => {
                toast.error(err.message);
            });
    };

    return (
        <div className="card bg-base-100 w-full max-w-sm mx-auto shadow-2xl mt-10">
            <form onSubmit={handleReset} className="card-body">
                <h2 className="text-2xl font-bold text-center mb-4">Reset Password</h2>

                <label className="label">Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="input mb-4"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <button className="btn btn-neutral w-full mb-3">Send Reset Email</button>

                <div className="text-center">
                    <Link to="/auth/login" className="text-blue-600 underline hover:text-blue-800">
                        Back to Login
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default ForgotPassword;
