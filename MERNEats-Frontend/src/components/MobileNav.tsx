import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";

const MobileNav = () => {
    const { user, isAuthenticated } = useAuth0();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="flex">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="z-20 text-orange-500 focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? (
                        // Close Icon
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        // Hamburger Icon
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    )}
                </button>

                <div
                    className={`z-10 flex flex-col  absolute h-full bg-white p-5 top-0 left-1/4 w-3/4 shadow-md ${isOpen ? "block" : "hidden"
                        }`}
                >
                    {isAuthenticated ? (
                        <>
                            <div className="mb-2">
                                <div className="text-lg text-black font-bold hover:text-orange-500 transition">
                                    {user ? user.email : "No Email"}
                                </div>

                                <div className="text-lg text-gray-500 font-bold p-2 hover:text-orange-500 transition">
                                    Order Status
                                </div>

                                <div className="text-lg text-gray-500 font-bold p-2 hover:text-orange-500 transition">
                                    My Restaurant
                                </div>

                                <div className="text-lg text-gray-500 font-bold p-2 hover:text-orange-500 transition">
                                    User Profile
                                </div>
                            </div>

                            <div>
                                <LogoutButton />
                            </div>
                        </>
                    ) : (
                        <div className="flex flex-col">
                            <div className="text-black text-lg font-semibold mb-4">Welcome to MERNEats.com!</div>
                            <LoginButton />
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default MobileNav