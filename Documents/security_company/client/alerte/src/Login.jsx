export default function Login() {
    return (
        <div className="ml-[25%] w-[50%] justify-between item-center ">
                    <p className="text-3xl ml-[29%] mt-[10%] font-bold">SECURITY COMPANY</p>
            <div className="bg-white mt-[15%] rounded-3xl h-[25rem]">
                <div className="ml-[44%]">
                    <p className="text-3xl mt-[10%] font-bold">Login</p>
                </div>
                <div className="ml-[30%] mt-10 ">
                    <p className="font-bold">E-mail</p>
                    <input className="w-[60%] h-[3rem] rounded-3xl bg-gray-300 " type="mail" />
                    <p className="font-bold">Password</p>
                    <input className="w-[60%] h-[3rem] rounded-3xl bg-gray-300 " type="password" />
                    <div>
                        <button className="w-[60%] font-bold text-white bg-black rounded-3xl mt-5 h-[3rem] ">Sign in</button>
                    </div>
                    <div>
                        <button className="text-blue-600 mt-[8%] ml-[20%] ">S'inscrire ici</button>
                    </div>
                </div>
            </div>
        </div>
    )
}