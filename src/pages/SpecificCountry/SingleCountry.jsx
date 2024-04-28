import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IoLocationOutline } from "react-icons/io5";

const SingleCountry = ({country}) => {

    const {
        _id,
        image,
        description, 
        country_Name,
        tourists_spot_name
    } = country;
    return (
        <div className="card bg-base-100 shadow-xl my-10">
            <div className="relative rounded-2xl">
                <figure>
                    <img className="w-full h-64 object-cover" src={image} />
                </figure>
                <p className="card-lavel flex items-center gap-2 bg-red absolute py-3 px-7 -bottom-6 left-6 text-white">
                <IoLocationOutline size={20}/>
                    <span>{country_Name}</span>
                </p>
            </div>

            <div className="card-body">
                <h2 className="font-semibold text-4xl mt-3">
                    {tourists_spot_name}
                </h2>
                
                <p className="my-2">{description.slice(0,120)}...</p>
                
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

SingleCountry.propTypes = {
    country: PropTypes.object
}
export default SingleCountry;