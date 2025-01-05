import SearchBar from "./SearchBar"

const SearchCard = () => {
    return (
        <>
            <div className="flex flex-col shadow-md rounded-lg text-center w-11/12 mb-6">
                <div className="text-orange-600 text-5xl font-bold m-1 mt-6">
                    <span>Tuck into a takeaway today</span>
                </div>
                <div className="text-black text-xl m-2 mb-4">
                    <span>Food is just a click away!</span>
                </div>
                <div className="m-2 mb-4">
                    <SearchBar />
                </div>
            </div>
        </>
    )
}

export default SearchCard