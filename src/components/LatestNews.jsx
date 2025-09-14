import Marquee from "react-fast-marquee";


const LatestNews = () => {
    return (
        <div className="mt-5 flex items-center gap-4 bg-gray-200 p-2">
            <p className="bg-red-400 px-4 py-2 text-white font-bold">Latest</p>
            <Marquee className="font-bold" pauseOnHover="true">
            <p>I can be a React component, multiple React components, or just some text.</p>
            <p>I can be a React component, multiple React components, or just some text.</p>
            <p>I can be a React component, multiple React components, or just some text.</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;