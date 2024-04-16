import Siderbar from "./Sidebar"
import Header from "./Header"
// import SiderbarItem from "./SiderbarItem"
import Containercharts from "./Containercharts"
export default function Dashboard() {
    return (
        <div>
            <Header />
            <div className="flex">
                <div className="w-1/6 overflow-hidden ">
                    <Siderbar />
                </div>
                <div className="w-5/6">
                    <Containercharts />
                </div>
            </div>
        </div>
    )
}
