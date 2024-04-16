export default function Header() {
    return (
        <div className="flex justify-between border-y">
            <div>
                <img src="./src/assets/token.svg" alt="" />
            </div>
            <div className="flex p-2">
                <div className="border mr-10 flex gap-2 h-10">
                    <img className="w-5" src="./src/assets/search.svg" alt="" />
                    <input placeholder="write something" className="border-none focus:outline-none" type="text" />
                </div>
                {/* <div className="flex"> */}
                    <div className="flex gap-4">
                        <img className="w-5 h-5" src="./src/assets/notify.png" alt="" />
                        <p>Bro James</p>
                    </div>
                    {/* <img src="./src/assets/profil.svg" alt="" />
                </div> */}
            </div>
        </div>
    )
}