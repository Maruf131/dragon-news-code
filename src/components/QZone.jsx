import swimmingImage from "../assets/swimming.png";
import classImage from "../assets/class.png";
import playgroundImage from "../assets/playground.png";
import bannerAdd from "../assets/bg.png";


const QZone = () => {
    return (
        <div className="bg-base-200 p-4">
            <h2 className="font-semibold text-gray-700">Q-Zone</h2>
            <div className="flex flex-col justify-center p-4 gap-4">
                <img src={classImage} alt="" />
                <img src={swimmingImage} alt="" />
                <img src={playgroundImage} alt="" />
                <img src={bannerAdd} alt="" />
            </div>
        </div>
    );
};

export default QZone;