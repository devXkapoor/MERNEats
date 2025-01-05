
const Footer = () => {
    return (
        <>
            <div className="flex flex-col justify-center md:flex-row md:justify-between md:items-center p-6 bg-orange-500 text-white h-32">
                <div className="flex justify-center">
                    <span className="text-3xl font-bold">
                        MERNEats.com
                    </span>
                </div>
                <div className="flex gap-4 justify-center text-md font-bold">
                    <span>
                        Privacy Policy
                    </span>
                    <span>
                        Terms of Service
                    </span>
                </div>
            </div >
        </>
    )
}

export default Footer