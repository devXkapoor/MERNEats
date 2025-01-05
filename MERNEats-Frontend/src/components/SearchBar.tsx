import { useState } from "react"

const SearchBar = () => {

    const [searchText, setSearchText] = useState("")

    const searchHandler = () => {

    }

    const resetHandler = () => {
        setSearchText("")
    }

    return (
        <>
            <div className="md:w-3/4 mx-auto flex gap-2 border-gray-300 border-2 px-2 py-2 rounded-full items-center">
                <div className="rounded-s-full w-full">
                    <input
                        type="text"
                        placeholder="Search by City"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value)
                        }}
                        className="w-full text-gray-500 text-xl rounded-s-full p-2 focus:outline-none"
                    />
                </div>
                <div className="flex gap-2 items-center justify-between rounded-full">
                    <div>
                        <button
                            onClick={resetHandler}
                            className="bg-white text-gray-500 rounded-full px-4 py-2 border-2 border-gray-300 font-medium">
                            Reset
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={searchHandler}
                            className="bg-orange-500 text-white rounded-full px-4 py-2 font-medium">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchBar