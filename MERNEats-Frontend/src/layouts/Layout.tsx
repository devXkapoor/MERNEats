import Footer from "../components/Footer"
import Header from "../components/Header"
import HeroImage from "../components/HeroImage"

interface Props {
    children: React.ReactNode,
    showHero: boolean
}
const Layout = ({ children, showHero = false }: Props) => {
    return (
        <>
            <div className="w-full max-w-[1920px] justify-self-center">
                <Header />
                {
                    showHero && <HeroImage />
                }
                <div className="w-full">
<<<<<<< HEAD
                    {children}
=======
                {children}
>>>>>>> 9e095cfc6036f48383d41438173fd9c4ae4bef39
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Layout