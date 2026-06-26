import Feature from "../sections/features/Feature"
import Hero from "../sections/hero/Hero"
import Pricing from "../sections/pricing/Pricing"
import Services from "../sections/services/Services"
import Testimonial from "../sections/testimonials/Testimonial"
import Footer from "./Footer"
import Header from "./Header"

function Container() {
    return (
        <div className="relative flex flex-col justify-start items-center w-full">
            {/* Main container with proper margins */}
            <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-265 lg:w-265 relative flex flex-col justify-start items-start min-h-screen">
                {/* Left vertical line */}
                <div className="w-px h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

                {/* Right vertical line */}
                <div className="w-px h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

                {/* Header and Navigation */}
                <Header />


                {/* Main Content */}
                <div
                    className="pt-16 sm:pt-20 md:pt-24 lg:pt-54 pb-8 sm:pb-12 md:pb-16 flex flex-col justify-start items-center px-2 sm:px-4 md:px-8 lg:px-0 w-full sm:pl-0 sm:pr-0 pl-0 pr-0"
                >
                    <Hero />
                    <Feature />
                    <Testimonial />
                    <Services />
                    <Pricing />
                    <Footer />
                </div>

            </div>
        </div>
    )
}
export default Container