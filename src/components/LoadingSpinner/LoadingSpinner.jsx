import { HashLoader } from "react-spinners";


const LoadingSpinner = () => {
    return (
        <div className="flex justify-center items-center w-full min-h-[calc(100vh-76px)]">
            <HashLoader color="#EF4444" />
        </div>
    );
};

export default LoadingSpinner;