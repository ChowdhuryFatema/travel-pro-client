import axios from "axios";
import { useEffect, useState } from "react";
import Country from "./Country/Country";
import UseTourSpots from "../../UseTourSpots/UseTourSpots";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";


const Countries = () => {

    const {isLoading} = UseTourSpots()
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        axios.get('https://travel-pro-server-250joqnjw-fatema-chowdhurys-projects.vercel.app/countries')
        .then(data => {
            setCountries(data.data)
        })
    }, [])

    if(isLoading){
        return <LoadingSpinner></LoadingSpinner>
    }


    return (
        <div className="bg-gray-100 my-20">
            <div className="max-w-7xl mx-auto px-5 py-14">
                <div className="mb-10">
                    <h2 className="text-4xl md:text-6xl font-semibold">Countries</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    {
                        countries.map(country => <Country 
                            key={country._id}
                            country={country}></Country>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Countries;