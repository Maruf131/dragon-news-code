import { Outlet } from "react-router-dom";
import Header from "../components/Header";


const HomeLayout = () => {
    return (
        <div className="max-w-11/12 mx-auto">
            <header>
                <Header></Header>
            </header>
            <main>
                <section className="left_nav"></section>
                <section className="main">
                    <Outlet></Outlet>
                </section>
                <section className="Right_nav"></section>
            </main>
        </div>
    );
};

export default HomeLayout;