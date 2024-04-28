import { useLoaderData } from "react-router-dom";

import axios from "axios";
import Swal from "sweetalert2";


const Update = () => {



    const updatedData = useLoaderData();
    console.log(updatedData);



    const {
        _id,
        country_Name,
        tourists_spot_name,
        location,
        description,
        average_cost,
        seasonality,
        travel_time,
        totalVisitorsPerYea,
        image
    } = updatedData;

    const handleUpdate = e => {

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


        const newData = {
            country_Name,
            tourists_spot_name,
            location,
            description,
            average_cost,
            seasonality,
            travel_time,
            totalVisitorsPerYea,
            image,
        }



        axios.put(`https://travel-pro-server-250joqnjw-fatema-chowdhurys-projects.vercel.app/touristsSpot/${_id}`, newData)
            .then(data => {
                console.log(data.data);

                if (data.data.modifiedCount > 0) {
                    Swal.fire({
                        text: "Tourists Spot Updated Successfully!",
                        icon: "success"
                    });
                    form.reset()
                }
            })
    }

    return (
        <div className="max-w-5xl mx-auto px-5">
            <div className="shadow-2xl md:p-16 p-10 my-5">
                <div className="mb-7">
                    <h2 className="text-red text-5xl text-red font-semibold text-center">Update Tourists Spot</h2>
                </div>
                <form onSubmit={handleUpdate}>
                    <div>

                        <div className="md:space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
                                <input type="text" name="country_Name"
                                    defaultValue={country_Name}
                                    placeholder="Country Name" className="border-b border-[#5B5B5B] py-3 outline-none w-full bg-transparent" />

                                <input type="text" name="tourists_spot_name"
                                    defaultValue={tourists_spot_name}
                                    placeholder="Tourists Spot Name" className="border-b border-[#5B5B5B] py-3 outline-none w-full bg-transparent" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
                                <input type="text" name="location"
                                    defaultValue={location}
                                    placeholder="Location" className="border-b border-[#5B5B5B] py-3 outline-none w-full bg-transparent" />

                                <input type="url" name="photo"
                                    defaultValue={image}
                                    placeholder="Photo URL" className="border-b border-[#5B5B5B] py-3 outline-none w-full bg-transparent" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
                                <input type="text" name="average_cost"
                                    defaultValue={average_cost}
                                    placeholder="Average Cost" className="border-b border-[#5B5B5B] py-3 outline-none w-full bg-transparent" />

                                <input type="text" name="seasonality"
                                    defaultValue={seasonality}
                                    placeholder="Seasonality" className="border-b border-[#5B5B5B] py-3 outline-none w-full bg-transparent" />
                            </div>


                            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
                                <input type="text" name="travel_time"
                                    defaultValue={travel_time}
                                    placeholder="Travel Time" className="border-b border-[#5B5B5B] py-3 outline-none w-full bg-transparent" />

                                <input type="text" name="totalVisitorsPerYea"
                                    defaultValue={totalVisitorsPerYea}
                                    placeholder="Total Visitors Per Year" className="border-b border-[#5B5B5B] py-3 outline-none w-full bg-transparent" />
                            </div>


                            <input type="text" name="description"
                                defaultValue={description}
                                placeholder="Short Description" className="border-b border-[#5B5B5B] py-3 outline-none w-full bg-transparent" />

                            <div className="pt-5">
                                <button type="submit" className="btn rounded-none  border-red-500 outline-none hover:border-red-500 bg-transparent btn-overlay btn-overlay2 relative hover:text-red-500 text-white w-1/3 hover:bg-transparent">
                                    <span className="z-30 text-lg font-bold">
                                        Update
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Update;