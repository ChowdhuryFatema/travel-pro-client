import { useParams } from "react-router-dom";
import UseTourSpots from "../../UseTourSpots/UseTourSpots";



const ViewDetails = () => {

    const { data } = UseTourSpots()
    const { id } = useParams()

    const singleData = data.find(item => item._id == id)



    return (
        <div className="max-w-7xl mx-auto px-5 my-10">
            <div className="">
                <div>
                    <img className="w-full h-96" src={singleData.image} alt="" />
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default ViewDetails;