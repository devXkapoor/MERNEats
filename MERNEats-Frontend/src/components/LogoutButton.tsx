import { useAuth0 } from "@auth0/auth0-react"

const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <>
            <button onClick={() => logout({
                logoutParams:
                {
                    returnTo: window.location.origin
                }
            })
            } className="bg-orange-500 p-2 rounded-lg text-white">
                Logout
            </button >
        </>
    )
}

export default LogoutButton