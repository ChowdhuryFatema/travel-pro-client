import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";


const AddTouristsSpot = () => {

    const {user} = useContext(AuthContext)

    const handleAddTourSpot = e => {
        e.preventDefault();
        const form = e.target;
        const country_Name = form.country_Name.value;
        const tourists_spot_name = form.tourists_spot_name.value;
        const location = form.location.value;
        const description = form.description.value;
        const average_cost = form.average_cost.value;
        const seasonality = form.seasonality.value;
        const travel_time = form.travel_time.value;
        const totalVisitorsPerYea = form.totalVisitorsPerYea.value;
        const image = form.photo.value;
        const user_name = user.displayName;
        const user_email = user.email;


        const tourDetails = {
            country_Name,
            tourists_spot_name,
            location,
            description,
            average_cost,
            seasonality,
            travel_time,
            totalVisitorsPerYea,
            user_name,
            user_email, 
            image
        }
        console.log(tourDetails)

        axios.post('http://localhost:5000/touristsSpots', tourDetails)
        .then(data => {
            console.log(data.data);

            if(data.data.insertedId){
                Swal.fire({
                    text: "Tourists Spot Added Successfully!",
                    icon: "success"
                });
                form.reset()
            }
        })
    }

    return (
        <div className="max-w-5xl mx-auto px-5">
            <div className="shadow-2xl md:p-16 p-10 my-5">
                <div className="mb-5">
                    <h2 className="text-red text-5xl text-red font-semibold text-center">Add Tourists Spot</h2>
                </div>
                <form onSubmit={handleAddTourSpot} className="space-y-2 md:space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10">
                        <input type="text" name="country_Name" placeholder="Country Name" className="border-b border-[#5B5B5B] py-3 outline-none w-full bg-transparent" />

                        <input type="text" name="tourists_spot_name" placeholder="Tourists Spot Name" className="border-b border-[#5B5B5B] py-3 outline-none w-full bg-transparent" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10">
                        <input type="text" name="location" placeholder="Location" className="border-b border-[#5B5B5B] py-3 outline-none w-full bg-transparent" />


                        <input type="text" name="photo" placeholder="Photo URL" className="border-b border-[#5B5B5B] py-3 outline-none w-full bg-transparent" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10">
                        <input type="text" name="average_cost" placeholder="Average Cost" className="border-b border-[#5B5B5B] py-3 outline-none w-full bg-transparent" />

                        <input type="text" name="seasonality" placeholder="Seasonality" className="border-b border-[#5B5B5B] py-3 outline-none w-full bg-transparent" />
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10">
                        <input type="text" name="travel_time" placeholder="Travel Time" className="border-b border-[#5B5B5B] py-3 outline-none w-full bg-transparent" />

                        <input type="text" name="totalVisitorsPerYea" placeholder="Total Visitors Per Year" className="border-b border-[#5B5B5B] py-3 outline-none w-full bg-transparent" />
                    </div>
                    <input type="text" name="description" placeholder="Short Description" className="border-b border-[#5B5B5B] py-3 outline-none w-full bg-transparent" />


                    <div className="pt-5">
                        <button type="submit" className="btn rounded-none  border-red-500 hover:border-red-500 bg-transparent btn-overlay btn-overlay2 relative hover:text-red-500 text-white w-1/3 hover:bg-transparent">
                            <span className="z-30 text-lg font-bold">
                                Add
                            </span>
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddTouristsSpot;