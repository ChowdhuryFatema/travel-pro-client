import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const TouristsSpotCard = ({touristsSpot}) => {
    const {
        _id,
        image,
        description, 
        country_Name,
        tourists_spot_name
    } = touristsSpot;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="relative rounded-2xl">
                <figure>
                    <img src={image} alt="Shoes" />
                </figure>
                <p className="card-lavel flex items-center gap-2 bg-red absolute py-3 px-7 -bottom-6 left-6 text-white">
                <IoLocationOutline size={20}/>
                    <span>{country_Name}</span>
                </p>
            </div>

            <div className="card-body">
                <h2 className="font-semibold text-3xl">
                    {tourists_spot_name}
                </h2>
                
                <p className="my-2">{description}</p>
                
                <div className="pt-1">
                    <Link to={`/touristsSpots/${_id}`} className="btn border-red-500 bg-transparent rounded-sm btn-overlay btn-overlay hover:border-red-500 hover:bg-transparent relative text-red hover:text-white duration-500">
                        <span className="z-30 text-lg font-semibold">
                            View Details
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

TouristsSpotCard.propTypes = {
    touristsSpot: PropTypes.object
}

export default TouristsSpotCard;