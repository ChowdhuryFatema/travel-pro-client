

const AddModal = () => {
    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>open modal</button>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <form>
                        <div className="px-3 my-3">
                            <div className="mb-5">
                                <h2 className="text-red text-3xl text-red font-semibold text-center">Update Tourists Spot</h2>
                            </div>
                            <div className="md:space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
                                    <input type="text" name="country_Name" placeholder="Country Name" className="border-b border-[#5B5B5B] py-3 outline-none w-full bg-transparent" />

                                    <input type="text" name="tourists_spot_name" placeholder="Tourists Spot Name" className="border-b border-[#5B5B5B] py-3 outline-none w-full bg-transparent" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
                                    <input type="text" name="location" placeholder="Location" className="border-b border-[#5B5B5B] py-3 outline-none w-full bg-transparent" />

                                    <input type="text" name="description" placeholder="Short Description" className="border-b border-[#5B5B5B] py-3 outline-none w-full bg-transparent" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
                                    <input type="text" name="average_cost" placeholder="Average Cost" className="border-b border-[#5B5B5B] py-3 outline-none w-full bg-transparent" />

                                    <input type="text" name="seasonality" placeholder="Seasonality" className="border-b border-[#5B5B5B] py-3 outline-none w-full bg-transparent" />
                                </div>


                                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
                                    <input type="text" name="travel_time" placeholder="Travel Time" className="border-b border-[#5B5B5B] py-3 outline-none w-full bg-transparent" />

                                    <input type="text" name="totaVisitorsPerYea" placeholder="Total Visitors Per Year" className="border-b border-[#5B5B5B] py-3 outline-none w-full bg-transparent" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
                                    <input type="text" name="photo" placeholder="Photo URL" className="border-b border-[#5B5B5B] py-3 outline-none w-full bg-transparent" />

                                    <input type="text" name="name" placeholder="User Name" className="border-b border-[#5B5B5B] py-3 outline-none w-full bg-transparent" />
                                </div>

                                <input type="email" name="email" placeholder="User Email" className="border-b border-[#5B5B5B] py-3 outline-none w-full bg-transparent" />

                                <div className="pt-5">
                                    <button type="submit" className="btn rounded-none  border-red-500 hover:border-red-500 bg-transparent btn-overlay btn-overlay2 relative hover:text-red-500 text-white w-1/3 hover:bg-transparent">
                                        <span className="z-30 text-lg font-bold">
                                            Update
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default AddModal;