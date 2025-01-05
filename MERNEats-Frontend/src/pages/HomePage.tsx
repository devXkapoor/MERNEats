import Landing from "../assets/landing.png"
import AppDownload from "../assets/appDownload.png"
import SearchCard from "../components/SearchCard";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col p-2 items-center">
        <div className="w-full justify-items-center m-4">
          <SearchCard />
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-center m-4">
          <div className="flex md:w-1/2 justify-center m-4">
            <img src={Landing} alt="Landing.png" />
          </div>

          <div className="flex flex-col md:w-1/2 gap-4 items-center text-center">
            <span className="text-3xl font-bold">Order takeaway even faster!</span>
            <span className="text-sm ">Download the MERNEats App for faster ordering and personalised recommendations</span>
            <img className="mb-4" src={AppDownload} alt="AppDownload.png" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;