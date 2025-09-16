import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";


const FindUs = () => {
    return (
        <div>
            <h2 className="font-semibold text-gray-700">Find Us On</h2>
            <div class="join join-vertical w-full mt-5">
                <button class="btn justify-start font-semibold text-blue-700  join-item"><FaFacebook></FaFacebook> Facebook</button>
                <button class="btn justify-start font-semibold  join-item"><FaGithub></FaGithub> GitHub</button>
                <button class="btn justify-start font-semibold text-yellow-700  join-item"><FaInstagram></FaInstagram> Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;