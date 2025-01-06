import { useAuth0 } from "@auth0/auth0-react"

const LogoutButton = ({color="black"}) => {
    const { logout } = useAuth0();

    return (
        <>
            <button onClick={() => logout({
                logoutParams:
                {
                    returnTo: window.location.origin
                }
            })
            } className={`bg-${color} font-bold text-md w-full p-2 mx-auto rounded-lg text-white`}>
                Logout
            </button >

        </>
    )
}

export default LogoutButton