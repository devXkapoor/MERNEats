import { useAuth0 } from "@auth0/auth0-react";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

const Header = () => {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <nav className="bg-white shadow-md">
      <div className="container h-20 mx-auto flex justify-between items-center p-4">
        <a href="/" className="text-orange-500 text-3xl font-bold">MERNEats.com</a>

        <div className="md:hidden">
          <MobileNav />
        </div>

        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </nav>
  );
};

export default Header;
