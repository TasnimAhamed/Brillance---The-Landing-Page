import analyticsDashboard from "../../../assets/images/services/analytics-dashboard-with-charts-graphs-and-data-vi.jpg"
import dataVisualization from "../../../assets/images/services/data-visualization-dashboard-with-interactive-char.jpg"
import planYourSchedules from "../../../assets/images/services/plan-your-schedules.jpeg"
import FeatureCard from "./FeatureCard"

const features = [
    {
        title: "Plan your schedules",
        description: "Streamline customer subscriptions and billing with automated scheduling tools.",
        image: planYourSchedules
    },
    {
        title: "Analytics & insights",
        description: "Transform your business data into actionable insights with real-time analytics.",
        image: analyticsDashboard
    },
    {
        title: "Collaborate seamlessly",
        description: "Keep your team aligned with shared dashboards and collaborative workflows.",
        image: dataVisualization
    }
]

function Feature() {
    return (
        <div
            className="self-stretch border-t border-[#E0DEDB] border-b flex justify-center items-start mt-16 sm:mt-18 md:mt-24 lg:mt-60"
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

            {/* Feature Cards */}
            <div
                className="flex-1 px-0 sm:px-2 md:px-0 flex flex-col md:flex-row justify-center items-stretch gap-0"
            >
                {features.map((feature, index) => (
                    <FeatureCard key={index} {...feature} />
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
    )
}
export default Feature