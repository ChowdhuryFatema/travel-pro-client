
import UseTourSpots from "../../UseTourSpots/UseTourSpots";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import TouristsSpotCard from "../../components/TouristsSpotCard/TouristsSpotCard";



const AllTouristsSpot = () => {

    const { data, isLoading } = UseTourSpots();

    if(isLoading){
        return <LoadingSpinner></LoadingSpinner>
    }


    const handleSort = () => {
        const sortedData = data.filter((a, b) => a.average_cost - b.average_cost);

        console.log(sortedData)
    }


    return (
        <div className="max-w-7xl mx-auto px-5">
            <div>
                <details className="dropdown">
                    <summary className="m-1 btn bg-red text-white text-xl mt-5 hover:bg-red-600">Sort</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={handleSort}><a>Average Cost</a></li>
                    </ul>
                </details>
            </div>
            <div className="my-10">
                <h2 className="text-5xl font-semibold text-center">All Tourists Spots</h2>
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