import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IoLocationOutline } from "react-icons/io5";

const SingleCountry = ({ country }) => {

    const {
        _id,
        image,
        location,
        seasonality,
        description,
        average_cost,
        country_Name,
        tourists_spot_name
    } = country;
    return (
        <div className="card bg-base-100 shadow-xl my-10">
            <div className="relative p-5">
                <figure>
                    <img className="w-full h-64 object-cover" src={image} />
                </figure>

                <p className="card-lavel flex items-center gap-2 bg-red absolute py-3 px-7 -bottom-0 left-14 text-white">
                    <IoLocationOutline size={20} />
                    <span>{country_Name}</span>
                </p>
            </div>

            <div className="p-6">

                <div className="flex justify-between items-center gap-2">
                    <h2 className="font-semibold text-3xl md:text-4xl mt-3">
                        {tourists_spot_name}
                    </h2>
                    <p className="font-semibold text-red text-2xl md:text-4xl">
                        ${average_cost}
                    </p>
                </div>

                <p>{description.slice(0, 120)}...</p>

                <div className='my-5 flex flex-wrap justify-between'>
                    <p className='btn btn-sm bg-green-100'>{seasonality}</p>
                    <p className='btn btn-sm bg-red-100'>{location}</p>
                </div>

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