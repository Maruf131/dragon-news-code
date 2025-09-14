import moment from "moment";
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center py-5">
            <img className="max-w-[450px]" src={logo} alt="" />
            <h3 className="text-gray-600 mt-2 text-lg">Journalism Without Fear or Favour</h3>
            <p className="mt-2 text-green-800 font-semibold">{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;