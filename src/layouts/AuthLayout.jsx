import { Outlet, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AuthLayout = () => {
  return (
    <div className="container mx-auto">
      <header>
        <Header />
      </header>
      <main>
        <div className="flex flex-col justify-center items-center p-5">
          <h1 className="text-4xl font-bold">Welcome to WarmPaws</h1>
          <p className="mb-5">Please log in or sign up to continue.</p>
        </div>
        <div>
          <Outlet />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default AuthLayout;
