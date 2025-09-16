import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h2 className="font-bold">Login With</h2>
            <div className="mt-5">
                <button  className="btn w-full text-blue-700 "><FcGoogle size={20}></FcGoogle> Login with Google</button>
                <button  className="btn w-full text-gray-600 mt-2"><FaGithub size={20}></FaGithub> Login with GitHub</button>
            
            </div>
        </div>
    );
};

export default SocialLogin;