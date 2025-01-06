import { useState } from "react"
import { Link } from "react-router"
import LogoutButton from "./LogoutButton"
import { useAuth0 } from "@auth0/auth0-react"
import LoginButton from "./LoginButton"

const MainNav = () => {
    const [isClicked, setIsClicked] = useState(false);
    const { isAuthenticated, user } = useAuth0();
    return (
        <>
            <div className="flex gap-2 text-lg font-bold">
                {
                    isAuthenticated
                        ?
                        (
                            <>
                                <div className="hover:text-orange-500">
                                    <Link to="#orderStatus">
                                        <span>Order Status</span>
                                    </Link>
                                </div>
                                <div className="hover:text-orange-500">
                                    <Link to="#email" onClick={() => {
                                        setIsClicked(!isClicked)
                                    }}>
                                        <span>{user?.email}</span>
                                    </Link>
                                </div>

                                <div className={`absolute top-16 right-32 text-md bg-white p-2 rounded-lg border-2 border-gray-200 shadow-2xl  ${isClicked ? "block" : "hidden"}`}>
                                    <div className="m-2">
                                        <Link to="#manageRestraunt">
                                            <span className="hover:text-orange-500">Manage Restaurant</span>
                                        </Link>
                                    </div>
                                    <div className="m-2">
                                        <Link to="#userProfile">
                                            <span className="hover:text-orange-500">User Profile</span>
                                        </Link>
                                    </div>
                                    <div className="m-2">
                                        <LogoutButton color="orange-500" />
                                    </div>
                                </div>
                            </>
                        )
                        :
                        (
                            <div>
                                <LoginButton />
                            </div>
                        )
                }
            </div >
        </>
    )
}

export default MainNav