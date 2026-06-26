import Avatar from "../../../assets/images/avatar/Avatar.png"
import Badge from "../../ui/Badge"

function Testimonial() {
    return (
        <div
            className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center"
        >
            {/* Header */}
            <div
                className="self-stretch px-4 sm:px-6 md:px-24 py-8 sm:py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6"
            >
                <div
                    className="w-full max-w-146.5 px-4 sm:px-6 py-4 sm:py-5 shadow-none overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4"
                >
                    <Badge type="barChart" text="Testimonials" />
                    <div
                        className="w-full max-w-118.138px text-center flex justify-center flex-col text-[#49423D] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-15 tracking-tight"
                    >
                        Confidence backed by results
                    </div>
                    <div
                        className="self-stretch text-center text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7"
                    >
                        Our customers achieve more each
                        day<br className="hidden sm:block" />
                        because their tools are simple,
                        powerful, and clear.
                    </div>
                </div>
            </div>

            {/* Added testimonial content with first testimonial image */}
            <div
                className="self-stretch px-2 overflow-hidden flex justify-start items-center bg-background border border-b border-l-0 border-r-0 border-t-0"
            >
                <div
                    className="flex-1 py-12 md:py-16 flex flex-col md:flex-row justify-center items-end gap-6"
                >
                    <div
                        className="self-stretch px-3 md:px-12 justify-center items-start gap-4 flex flex-col md:flex-row"
                    >
                        {/* Testimonial Image */}
                        <img
                            src={Avatar}
                            alt="Jamie Marshall"
                            className="w-48 h-50 rounded-lg object-cover"
                        />

                        {/* Testimonial Content */}
                        <div
                            className="flex-1 px-6 py-6 shadow-[0px_0px_0px_0.75px_rgba(50,45,43,0.12)] overflow-hidden flex flex-col justify-start items-start gap-6"
                        >
                            <div
                                className="self-stretch justify-start flex flex-col text-[#49423D] text-2xl md:text-[32px] font-medium leading-10 md:leading-10.5 h-auto tracking-tight"
                            >
                                "In just a few minutes, we
                                transformed our data into
                                actionable insights. The
                                process was seamless and
                                incredibly efficient!"
                            </div>
                            <div
                                className="self-stretch flex flex-col justify-start items-start gap-1"
                            >
                                <div
                                    className="self-stretch justify-center flex flex-col text-[rgba(73,66,61,0.90)] text-lg font-medium leading-6.5"
                                >
                                    Jamie Marshall
                                </div>
                                <div
                                    className="self-stretch justify-center flex flex-col text-[rgba(73,66,61,0.70)] text-lg font-medium leading-6.5"
                                >
                                    Co-founder, Exponent
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Testimonial