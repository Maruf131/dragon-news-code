import { NavLink } from "react-router-dom";
import userLogo from "../assets/user.png"

const Navbar = () => {
    return (
        <div className="mt-5 flex justify-between items-center">
            <div className="">
                <img className="w-[80]" src={userLogo} alt="" /></div>
            <div className="Nav_link space-x-5 font-bold text-green-800">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div>
                
                <button className="btn btn-neutral">LogIn</button>
            </div>
        </div>
    );
};

export default Navbar;