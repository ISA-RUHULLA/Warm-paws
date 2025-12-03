import { Outlet, Link } from "react-router-dom";
import Header from "../components/Header"
import Footer from "../components/Footer"

const Homelayout = () => {
  return (
    <div>

      <Header />
      <main>
        <Outlet />
      </main>
        <Footer />
    </div>
  );
};

export default Homelayout;
