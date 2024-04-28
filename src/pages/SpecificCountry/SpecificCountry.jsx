import { useParams } from "react-router-dom";
import UseTourSpots from "../../UseTourSpots/UseTourSpots";
import SingleCountry from "./SingleCountry";


const SpecificCountry = () => {

    const {country_Name} = useParams()
    const {data} = UseTourSpots();

    const specificCountry = data.filter(item => item.country_Name == country_Name)

    return (
        <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-10">
            {
                specificCountry.map(country => <SingleCountry 
                    key={country._id}
                    country={country}></SingleCountry>)
            }
        </div>
    </div>
    );
};

export default SpecificCountry;