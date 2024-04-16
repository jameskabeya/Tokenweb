export default function Sign_up() {
    return (
        <div className="ml-[25%] w-[50%] justify-between item-center ">
            <p className="text-3xl ml-[29%] mt-[10%] font-bold">SECURITY COMPANY</p>
            <div className="bg-blue-300 mt-[15%] rounded-3xl h-[30rem]">
                <div className="ml-[44%]">
                    <p className="text-3xl mt-[10%] font-bold">Login</p>
                </div>
                <div className=" mt-10 ">
                    <div>
                        <p className="font-bold mt-3">E-mail</p>
                        <input className="w-[50%] bg-white text-black h-[2rem] rounded-3xl bg-gray-300 " type="mail" />
                        <p className="font-bold mt-3">Password</p>
                        <input className="w-[50%] bg-white text-black h-[2rem] rounded-3xl bg-gray-300 " type="password" />
                        <p className="font-bold mt-3">Password</p>
                        <input className="w-[50%] bg-white text-black h-[2rem] rounded-3xl bg-gray-300 " type="password" />
                        <p className="font-bold mt-3">Password</p>
                        <input className="w-[50%] bg-white text-black h-[2rem] rounded-3xl bg-gray-300 " type="password" />
                        <div>
                            <button className="w-[50%] font-bold text-white bg-black rounded-3xl mt-5 h-[3rem] ">Register</button>
                        </div>
                    </div>
                    <div className="">
                        <label>profil pucture</label>
                        <div>
                            <img className="bg-white" src="client/alerte/src/assets/images.png" alt="" />
                        </div>
                        <label>Upload image</label>
                    </div>
                </div>
            </div>
        </div>
    )
}