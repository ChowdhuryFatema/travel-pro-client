import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>

            <dotlottie-player src="https://lottie.host/4bac5b1c-3d59-4a64-b7fa-ffa163d5d54d/51QyAbXdcb.lottie" background="transparent animate-img" style={{ width: '400px', height: '400px' }} speed="1" direction="1" playMode="normal" loop autoplay></dotlottie-player>

            <Link to="/" className="btn rounded-none hover:border-red-500 border-red-500 bg-transparent btn-overlay btn-overlay hover:bg-transparent relative text-red hover:text-white duration-500">
                <span className="z-30 font-bold text-lg">
                    Go Home
                </span></Link>
        </div>
    );
};

export default ErrorPage;