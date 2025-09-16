import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftSideBar from "../components/homePageLayOuts/LeftSideBar";
import RightSideBar from "../components/homePageLayOuts/RightSideBar";


const HomeLayout = () => {
    return (
        <div className="max-w-11/12 mx-auto">
            <header>
                <Header></Header>
                <section>
                    <LatestNews></LatestNews>
                </section>
                <section>
                    <Navbar></Navbar>
                </section>
            </header>
            <main className="grid md:grid-cols-12 grid-cols-1 md:gap-4 mt-5">
                <aside className="col-span-3">
                    <LeftSideBar></LeftSideBar>
                </aside>
                <section className="col-span-6">
                    <Outlet></Outlet>
                </section>
                <aside className="col-span-3">
                    <RightSideBar></RightSideBar>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;