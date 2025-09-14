import logo from "../assets/logo.png"

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center py-10">
            <img className="max-w-[450px]" src={logo} alt="" />
            <h3 className="text-gray-600 mt-3 text-lg">Journalism Without Fear or Favour</h3>         
        </div>
    );
};

export default Header;