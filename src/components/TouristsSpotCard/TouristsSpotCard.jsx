import { FaRegClock } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const TouristsSpotCard = ({touristsSpot}) => {
    const {_id} = touristsSpot;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="relative rounded-2xl">
                <figure>
                    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
                </figure>
                <p className="card-lavel flex items-center gap-2 bg-red absolute py-3 px-7 -bottom-6 left-6 text-white">
                    <FaRegClock />
                    <span>2 Day & 1 night</span>
                </p>
            </div>

            <div className="card-body">
                <h2 className="card-title">
                    Shoes!
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
                <div>
                    <Link to={`/touristsSpots/${_id}`} className="btn border-red-500 bg-transparent rounded-none btn-overlay btn-overlay hover:bg-transparent relative text-red hover:text-white duration-500">
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