
import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react"
import { createContext, useState } from "react"

const SiderbarContext = createContext();

export default function Siderbar({ children, active }) {
    const [expanded, setExpanded] = useState(true)
    return (
        <div className="h-screen">
            <nav className="h-full flex flex-col gap-4 border-r shadow-sm  p-8">
                <div className="pb-2 flex justify-between items-center">
                    <img className={`overflow-hidden transition-all ${expanded ? "w-40" : "w-0"}`} src="./src/assets/token.svg" alt="" />
                    <button onClick={() => setExpanded((curr) => !curr)} className="p-1.5 rounded-lg hover:bg-red-500">
                        {expanded ? <ChevronFirst /> : <ChevronLast />}
                    </button>
                </div>
                <SiderbarContext.Provider value={{ expanded }}>
                    <ul className="flex-1 px-3">
                        <li
                            className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${active
                                ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"}`}>

                            <div className="grid grid-cols-1 gap-3">
                                <div className="flex items-center gap-2">
                                    <img src="./src/assets/home.svg" alt="Home Icon" />
                                    <span className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"} `} >Home</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src="./src/assets/home.svg" alt="Project Icon" />
                                    <span className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"} `} >Project</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src="./src/assets/Leading Icon (1).svg" alt="Tasks Icon" />
                                    <span className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"} `} >Tasks</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src="./src/assets/Chat.svg" alt="Performance Icon" />
                                    <span className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"} `} >Performance</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src="./src/assets/Leading Icon (2).svg" alt="Settings Icon" />
                                    <span className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"} `} >Settings</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src="./src/assets/Leading Icon (2).svg" alt="Logout Icon" />
                                    <span className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"} `} >Logout</span>
                                </div>
                            </div>


                            {alert && (
                                <div
                                    className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"
                                        }`}
                                ></div>
                            )}
                        </li>
                    </ul>
                </SiderbarContext.Provider>
                <div className="border-t flex p-3">
                    <img className="w-40 h-10 rounded-md" src="./src/assets/token.svg" alt="" />
                    <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"} `}>
                        <div className="leading-4">
                            <h4 className="font-semibold">TokenWeb</h4>
                            <span className="tex-x5 text-gray-600">jamesdanielkabeya@gmail.com</span>

                        </div>
                        <MoreVertical size={20} />
                    </div>
                </div>
            </nav>
        </div>
    )
}


