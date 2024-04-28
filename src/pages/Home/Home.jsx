
import Banner from "./Banner";
import Blogs from "./Blogs";
import ContactUs from "./ContactUs";
import Countries from "./Countries";
import TouristsSpots from "./TouristsSpots";


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <TouristsSpots></TouristsSpots>
            <Countries></Countries>
            <Blogs></Blogs>
            <ContactUs></ContactUs>
        </>
    );
};

export default Home;