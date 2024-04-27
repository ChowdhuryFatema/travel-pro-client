import { useParams } from "react-router-dom";
import UseTourSpots from "../../UseTourSpots/UseTourSpots";



const ViewDetails = () => {

    const {data} = UseTourSpots()
    const {id} = useParams()

    const singleData = data.find(item => item._id == id)



    return (
        <div>
            <h2>Details </h2>
            <img src={singleData.image} alt="" />
        </div>
    );
};

export default ViewDetails;