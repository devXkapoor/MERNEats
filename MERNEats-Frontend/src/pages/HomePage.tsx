import Landing from "../assets/landing.png"
import AppDownload from "../assets/appDownload.png"

const HomePage = () => {
  return (
    <>
      <div className=" container p-2">
        <div className="flex gap-2">
          <input
            type="text"
            className="border-2 border-gray-300 text-gray-500 focus:outline-none rounded-md p-1"
          />
          <button className="bg-orange-500 text-white hover:bg-blue-800 rounded-md p-2">
            Search
          </button>
        </div>

        <div className=" container flex flex-col items-center m-auto">
          <img src={Landing} alt="Landing.png" />
          <h2 className="text- font-bold">Order takeaway even faster</h2>
          <h4>Download the MERNEats App for faster ordering and personalised recommendations</h4>
          <img src={AppDownload} alt="AppDownload.png" />
        </div>
      </div>
    </>
  );
};

export default HomePage;