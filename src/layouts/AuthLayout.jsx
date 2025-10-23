import { Outlet, Link } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>

      <div className="flex flex-col justify-center items-center p-5">
        <h1 className="text-4xl font-bold">Welcome to WarmPaws</h1>
        <p className="mb-5">Please log in or sign up to continue.</p>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
