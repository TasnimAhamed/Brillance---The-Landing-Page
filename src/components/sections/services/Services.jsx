import integration from "../../../assets/images/services/integration.png"
import speak from "../../../assets/images/services/speak.png"
import workOrder from "../../../assets/images/services/work-order.png"
import workSync from "../../../assets/images/services/work-sync.png"
import Badge from "../../ui/Badge"
import ServiceCard from "./ServiceCard"

const services = [
    {
        title: "Smart. Simple. Brilliant.",
        description: "Your data is beautifully organized so you see everything clearly without the clutter.",
        border: "border-b border-r-0 md:border-r border-[rgba(55,50,47,0.12)]",
        imagePath: workOrder
    },
    {
        title: "Your work, in sync",
        description: "Every update flows instantly across your team and keeps collaboration effortless and fast.",
        border: "border-b border-[rgba(55,50,47,0.12)]",
        imagePath: workSync
    },
    {
        title: "Effortless integration",
        description: "All your favorite tools connect in one place and work together smoothly.",
        border: "border-r-0 md:border-r border-[rgba(55,50,47,0.12)]",
        imagePath: integration
    },
    {
        title: "Built for clarity",
        description: "From dashboards to reports, every view is designed to give you the insights you need, instantly.",
        border: "",
        imagePath: speak
    }
]

function Services() {
    return (
        <div
            className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center"
        >
            {/* Header */}
            <div
                className="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-265 lg:w-265 py-8 sm:py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6"
            >
                <div
                    className="w-full max-w-160 lg:w-160 px-4 sm:px-6 py-4 sm:py-5 shadow-none overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4"
                >
                    {/* Badge */}
                    <Badge
                        type="squareGrid"
                        text="Services"
                    />

                    <div
                        className="w-full max-w-[598.06px] lg:w-[598.06px] text-center flex justify-center flex-col text-[#49423D] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-15 tracking-tight"
                    >
                        Built for absolute clarity and
                        focused work
                    </div>
                    <div
                        className="self-stretch text-center text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7"
                    >
                        Stay focused with tools that
                        organize, connect<br />
                        and turn information into confident
                        decisions.
                    </div>
                </div>
            </div>

            {/* Features Content */}
            <div
                className="self-stretch flex justify-center items-start"
            >
                {/* Left Pattern */}
                <div
                    className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden"
                >
                    <div
                        className="w-30 sm:w-35 md:w-40.5 -left-10 sm:-left-12.5 md:-left-14.5 -top-24 sm:-top-30 absolute flex flex-col justify-start items-start"
                    >
                        {[...Array(12)].map((_, i) => (
                            <div
                                key={i}
                                className="self-stretch h-3 sm:h-4 -rotate-45 origin-top-left outline outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                            ></div>
                        ))}
                    </div>
                </div>

                {/* Grid Content */}
                <div
                    className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-r border-[rgba(55,50,47,0.12)]"
                >
                    {/* Service Card */}
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>

                {/* Right Pattern */}
                <div
                    className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden"
                >
                    <div
                        className="w-30 sm:w-35 md:w-40.5 -left-10 sm:-left-12.5 md:-left-14.5 -top-24 sm:-top-30 absolute flex flex-col justify-start items-start"
                    >
                        {[...Array(12)].map((_, i) => (
                            <div
                                key={i}
                                className="self-stretch h-3 sm:h-4 -rotate-45 origin-top-left outline outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Services