import { Link } from "react-router-dom";
import signUpImg from '../../assets/signup.gif';


const SignUp = () => {
    return (
        <div className="bg-[#F2F2F2] min-h-[calc(100vh-76px)]">
            <div className="max-w-6xl mx-auto px-5 py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 bg-white items-center shadow-lg">
                    <div className="p-10  border-t md:border-t-0 border-r-0 md:border-r order-2 md:order-1 bg-white">
                        <div className="mb-4">
                            <h2 className="text-5xl font-semibold text-center text-red">Sign Up</h2>
                        </div>
                        <form>
                            <div className="space-y-4">
                                <input type="text" name="name" placeholder="Name" className="border-b border-[#5B5B5B] py-3 outline-none w-full bg-transparent" /> <br />
                                <input type="email" name="email" placeholder="Email" className="border-b border-[#5B5B5B] py-3 outline-none w-full bg-transparent" /> <br />
                                <input type="url" name="photo" placeholder="Photo URL" className="border-b border-[#5B5B5B] py-3 outline-none w-full bg-transparent" /> <br />
                                <input type="password" name="password" placeholder="Password" className="border-b border-[#5B5B5B] py-3 outline-none w-full bg-transparent" /> <br />
                                <input type="checkbox" name="" id="" />
                                <span className="ml-2 text-sm">I agree the Terms and Conditions</span>
                                <div className="pt-4">
                                    <button className="btn w-full text-lg bg-red text-white">Sign Up</button>
                                </div>
                                <p className="text-center text-sm">Already have an account?
                                    <Link to="/login" className="underline font-semibold text-blue-500"> Sign In</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                    <div className="order-1 md:order-2">


                        <img className="w-full" src={signUpImg} alt="" />

                    </div>
                </div>
            </div>
        </div>

    );
};

export default SignUp;