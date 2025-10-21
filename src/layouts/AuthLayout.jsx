import { Outlet, Link } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>Authentication Area</h2>
      <nav>
        <Link to="/auth/login">Login</Link> |{" "}
        <Link to="/auth/signup">Signup</Link>
      </nav>

      <Outlet /> {/* ✅ Auth pages (login/signup) এখানে render হবে */}
    </div>
  );
};

export default AuthLayout;
