
import { useState } from "react";
import UseTourSpots from "../../UseTourSpots/UseTourSpots";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import TouristsSpotCard from "../../components/TouristsSpotCard/TouristsSpotCard";



const AllTouristsSpot = () => {

    const { data, isLoading } = UseTourSpots();
    const [sorted, setSorted] = useState([])

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }


    const handleSort = () => {
        const sortedData = data.sort((a, b) => b.average_cost - a.average_cost);

        setSorted(sortedData)
    }


    return (
        <div className="max-w-7xl mx-auto px-5">
            <div className="flex justify-between my-10 items-center">

                <h2 className="text-4xl md:text-5xl font-semibold">All Tourists 
                <span className="text-red"> Spots</span></h2>
                <details className="dropdown">
                    <summary className="btn bg-red text-white text-xl hover:bg-red-600">Sort</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => handleSort(sorted)}><a>Average Cost</a></li>
                    </ul>
                </details>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-10">
                {
                    data.map(touristsSpot => <TouristsSpotCard
                        key={touristsSpot._id}
                        touristsSpot={touristsSpot}></TouristsSpotCard>)
                }
            </div>
        </div>
    );
};

export default AllTouristsSpot;