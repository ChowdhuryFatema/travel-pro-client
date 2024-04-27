import UseTourSpots from "../../UseTourSpots/UseTourSpots";
import TouristsSpotCard from "../../components/TouristsSpotCard/TouristsSpotCard";



const AllTouristsSpot = () => {

    const { data } = UseTourSpots();

    return (
        <div className="max-w-7xl mx-auto px-5">
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