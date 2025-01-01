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
            <div>
                <Header />
                {
                    showHero && <HeroImage />
                }
                {children}
                <Footer />
            </div>
        </>
    )
}

export default Layout