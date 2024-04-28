
import UseTourSpots from "../../UseTourSpots/UseTourSpots";
import TouristsCard from "./TouristsCard";

const TouristsSpots = () => {

    const {data} = UseTourSpots();

    return (
        <div className="max-w-7xl mx-auto px-5">
            <div>
                <h2 className="text-4xl md:text-6xl font-semibold my-10">Tourists <span className="text-red">Spots</span></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                


                {
                    data.slice(0, 6).map(touristSpot => <TouristsCard
                        key={touristSpot._id}
                        touristSpot={touristSpot}></TouristsCard>)
                }

            </div>
        </div>
    );
};

export default TouristsSpots;