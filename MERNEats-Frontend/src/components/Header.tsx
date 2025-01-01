import { useAuth0 } from "@auth0/auth0-react"
import LoginButton from "./LoginButton"
import LogoutButton from "./LogoutButton"

const Header = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    console.log(user)

    if (isLoading)
        return <div>Loading...</div>

    return (
        <>
            <div className=" bg-white flex justify-between h-24 p-4">

                <div className="text-orange-500 text-4xl font-bold my-auto">
                    MERNEats.com
                </div>

                <div className="flex justify-between gap-6">
                    {
                        isAuthenticated ?
                            (
                                <>
                                    <div className=" text-2xl text-black font-bold flex gap-4 my-auto">
                                        <div>
                                            Order Status
                                        </div>
                                        <div>
                                            {isAuthenticated ? user?.email : "No Email"}
                                        </div>
                                    </div>

                                    <div className="my-auto rounded-full text-2xl text-black font-bold">
                                        {isAuthenticated ? <img src={user?.picture} alt="" className="h-12 rounded-full" /> : "No Pic"}
                                    </div>

                                    <div className=" text-2xl font-bold my-auto">
                                        <LogoutButton />
                                    </div>
                                </>
                            )
                            :
                            (
                                <>
                                    <div className=" text-2xl font-bold my-auto">
                                        <LoginButton />
                                    </div>
                                </>
                            )
                    }

                </div>
            </div>
        </>
    )
}

export default Header