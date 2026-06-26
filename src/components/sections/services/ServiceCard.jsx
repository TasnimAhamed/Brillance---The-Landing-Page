function ServiceCard({ title, description, border, imagePath }) {
    return (
        <div
            className={`p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6 ${border}`}
        >
            <div className="flex flex-col gap-2">
                <h3
                    className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight"
                >
                    {title}
                </h3>
                <p
                    className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed"
                >
                    {description}
                </p>
            </div>
            <div
                className="w-full h-50 sm:h-62.5 md:h-75 rounded-lg flex items-center justify-center overflow-hidden relative"
            >
                <img
                    src={imagePath}
                    alt={title}
                    className="h-full object-cover"
                />
            </div>
        </div>
    )
}
export default ServiceCard