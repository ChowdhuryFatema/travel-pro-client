import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import TopNav from "../components/TopNav/TopNav";


const Root = () => {
    return (
        <div>
            <TopNav></TopNav>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;