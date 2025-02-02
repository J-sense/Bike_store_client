import { Outlet } from "react-router-dom";
import Navabr from "../Navabr";
import Footer from "../ui/Footer";
// import App from "../../App";

const Mainlayout = () => {
  return (
    <div className="max-w-full-lg  mx-auto min-h-screen ">
      <div className="">
        <Navabr />
      </div>
      <div className="">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Mainlayout;
