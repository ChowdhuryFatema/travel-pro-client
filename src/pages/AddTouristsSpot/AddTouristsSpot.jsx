

const AddTouristsSpot = () => {
    return (
        <div className="max-w-6xl mx-auto px-6">


            <div className="shadow-2xl p-16 my-5">
                <div className="mb-5">
                    <h2 className="text-red text-5xl text-red font-semibold text-center">Add Tourists Spot</h2>
                </div>
                <div className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <input type="text" name="country_Name" placeholder="Country Name" className="border-b border-[#5B5B5B] py-3 outline-none w-full bg-transparent" />

                        <input type="text" name="tourists_spot_name" placeholder="Tourists Spot Name" className="border-b border-[#5B5B5B] py-3 outline-none w-full bg-transparent" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <input type="text" name="location" placeholder="Location" className="border-b border-[#5B5B5B] py-3 outline-none w-full bg-transparent" />

                        <input type="text" name="description" placeholder="Short Description" className="border-b border-[#5B5B5B] py-3 outline-none w-full bg-transparent" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <input type="text" name="average_cost" placeholder="Average Cost" className="border-b border-[#5B5B5B] py-3 outline-none w-full bg-transparent" />

                        <input type="text" name="seasonality" placeholder="Seasonality" className="border-b border-[#5B5B5B] py-3 outline-none w-full bg-transparent" />
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <input type="text" name="travel_time" placeholder="Travel Time" className="border-b border-[#5B5B5B] py-3 outline-none w-full bg-transparent" />

                        <input type="text" name="totaVisitorsPerYea" placeholder="Total Visitors Per Year" className="border-b border-[#5B5B5B] py-3 outline-none w-full bg-transparent" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <input type="text" name="photo" placeholder="Photo URL" className="border-b border-[#5B5B5B] py-3 outline-none w-full bg-transparent" />

                        <input type="text" name="name" placeholder="User Name" className="border-b border-[#5B5B5B] py-3 outline-none w-full bg-transparent"/>
                    </div>

                    <input type="email" name="email" placeholder="User Email" className="border-b border-[#5B5B5B] py-3 outline-none w-full bg-transparent"/>

                   <button type="submit" className="btn rounded-none  border-red-500 hover:border-red-500 bg-transparent btn-overlay btn-overlay2 relative hover:text-red-500 text-white w-1/3 hover:bg-transparent">
                        <span className="z-30 text-lg font-bold">
                            Add
                        </span>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default AddTouristsSpot;