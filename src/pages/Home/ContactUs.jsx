

const ContactUs = () => {
    return (
        <div className="max-w-7xl mx-auto px-5">
            <div className="grid grid-cols-1 gap-8 py-16 mx-auto rounded-lg lg:grid-cols-2 dark:bg-gray-100 dark:text-gray-800 justify-center lg:justify-between">
                <div className="mx-auto lg:mx-0">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold leading-tight lg:text-5xl text-center">Lets <span className="text-red">talk!</span></h2>
                        <p className="text-center">Fill in the form to start a conversation</p>
                    </div>
                   <div>
                   <dotlottie-player src="https://lottie.host/777592ef-00c2-46e3-9c82-f35f65703461/OtEqjuQHFv.lottie" background="transparent" speed="1" direction="1" playMode="normal" loop autoplay className="w-full"></dotlottie-player>
                   </div>
                </div>
                <form noValidate="" className="space-y-6">
                    <div>
                        <label htmlFor="name" className="text-sm">Full name</label>
                        <input id="name" type="text" placeholder="" className="w-full border border-gray-400 outline-none p-3 rounded dark:bg-gray-100" />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm">Email</label>
                        <input id="email" type="email" className="w-full border border-gray-400 outline-none p-3 rounded dark:bg-gray-100" />
                    </div>
                    <div>
                        <label htmlFor="message" className="text-sm">Message</label>
                        <textarea id="message" rows="3" className="w-full border border-gray-400 outline-none p-3 rounded dark:bg-gray-100"></textarea>
                    </div>


                    <button type="submit" className="btn w-full rounded-none  border-red-500 hover:border-red-500 bg-transparent btn-overlay btn-overlay2 relative hover:text-red-500 text-white hover:bg-transparent">
                            <span className="z-30 text-lg font-bold">
                            Send Message
                            </span>
                        </button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;