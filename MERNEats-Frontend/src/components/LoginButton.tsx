import { useAuth0 } from "@auth0/auth0-react"

const LoginButton = () => {

    const { loginWithRedirect } = useAuth0();

    return (
        <>
            <button onClick={() => {
                loginWithRedirect();
            }} className="bg-orange-500 font-bold text-md w-full p-2 rounded-lg text-white">Login</button>
        </>
    )
}

export default LoginButton