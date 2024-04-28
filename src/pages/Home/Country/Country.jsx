import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Country = ({ country }) => {
    
    const { image, country_Name, description } = country;

    return (
        <Link to={`/specificCountry/${country_Name}`} className="card lg:card-side rounded-none bg-base-100 shadow-xl">
            <div className="md:flex">
                <figure className="flex-1">
                    <img className="md:pl-4 md:h-40 w-full" src={image} alt="Album" /></figure>
                <div className="card-body flex-1">
                    <h2 className="card-title text-3xl">{country_Name}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </Link>
    );
};

Country.propTypes = {
    country: PropTypes.object,
}
export default Country;