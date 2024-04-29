import { useParams } from "react-router-dom";
import UseTourSpots from "../../UseTourSpots/UseTourSpots";



const ViewDetails = () => {

    const { data } = UseTourSpots()
    const { id } = useParams()

    const singleData = data.find(item => item._id == id) || {};

    const {
        country_Name,
        tourists_spot_name,
        location,
        description,
        average_cost,
        seasonality,
        travel_time,
        totalVisitorsPerYea
    } = singleData;



    return (
        <div className="max-w-7xl mx-auto px-5 my-10">
            <div className="">
                
                <div className="dark:bg-gray-100 dark:text-gray-900">
                    <div className="container grid grid-cols-12 mx-auto">
                        <div className="flex flex-col justify-center col-span-12 dark:bg-gray-300 bg-no-repeat lg:col-span-6 lg:h-auto ">
                        <img className="w-full h-full object-cover" src={singleData.image} alt="" />
                        </div>


                        <div className="flex flex-col col-span-12 md:p-6 divide-y lg:col-span-6 lg:p-10 dark:divide-gray-300">
                            <div className="pt-6 pb-4 space-y-2">
                                <span>{seasonality}</span>
                                <h1 className="text-4xl font-bold text-red">{country_Name}</h1>
                                <div className="md:flex justify-between gap-5">
                                    <p className="text-lg font-semibold">{tourists_spot_name}</p>
                                    <p className="text-lg font-semibold"><span className="text-red">Location:</span> {location}</p>
                                </div>
                                
                            </div>
                            <div className="pt-6 pb-4 space-y-2">
                                <p>{description}</p>                                
                                
                            </div>
                            <div className="pt-6 pb-4 space-y-2">
                                
                                <div className="flex flex-wrap justify-between gap-5">
                                    <p className="btn btn-sm bg-red-200">{travel_time}</p>
                                    <p className="btn btn-sm bg-green-200">{average_cost}</p>
                                    <p className="btn btn-sm bg-blue-200">{totalVisitorsPerYea}</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;