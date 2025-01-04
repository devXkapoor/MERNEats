import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useState } from "react";

const Header = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);

  if (isLoading) return <div>Loading...</div>;

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <a href="#home" className="text-orange-500 text-2xl font-bold">MERNEats.com</a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-orange-500 focus:outline-none"
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
          className={`absolute md:static top-16 left-0 w-full bg-white md:w-auto md:flex md:gap-8 md:items-center shadow-md md:shadow-none ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {isAuthenticated ? (
            <>
              <div className="text-lg text-black font-medium p-4 md:p-0 hover:text-orange-500 transition">
                Order Status
              </div>

              <div className="text-lg text-black font-medium p-4 md:p-0 hover:text-orange-500 transition">
                {user ? user.email : "No Email"}
              </div>

              <div className="p-4 md:p-0">
                {user ? (
                  <img
                    src={user.picture}
                    alt="Profile Pic"
                    className="h-12 w-12 rounded-full border-2 border-orange-500"
                  />
                ) : (
                  "No Pic"
                )}
              </div>

              <div className="text-lg p-4 md:p-0">
                <LogoutButton />
              </div>
            </>
          ) : (
            <div className="text-lg font-medium p-4 md:p-0 hover:text-orange-500 transition">
              <LoginButton />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
