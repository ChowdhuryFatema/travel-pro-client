import { FaRegClock } from "react-icons/fa";

const TouristsSpots = () => {
    return (
        <div className="max-w-7xl mx-auto px-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
                            <button className="btn border-red-500 bg-transparent rounded-none btn-overlay btn-overlay hover:bg-transparent relative text-red hover:text-white duration-500">
                                <span className="z-30 text-lg font-semibold">
                                    View Details
                                </span>
                            </button>
                        </div>
                    </div>


                </div>





                <div className="card bg-base-100 shadow-xl">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Shoes!
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Shoes!
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Shoes!
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>







            </div>
        </div>
    );
};

export default TouristsSpots;