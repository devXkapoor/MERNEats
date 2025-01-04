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
                {children}
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Layout