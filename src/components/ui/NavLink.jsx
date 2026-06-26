function NavLink({title, navLinks}) {
    return (
        <div
            className="flex flex-col justify-start items-start gap-3 flex-1 min-w-40"
        >
            <div
                className="self-stretch text-[rgba(73,66,61,0.50)] text-sm font-medium leading-5"
            >
                {title}
            </div>
            <div
                className="flex flex-col justify-end items-start gap-2"
            >
                {navLinks.map((link, index) => (
                    <div
                        key={index}
                        className="text-[#49423D] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] transition-colors"
                    >
                        {link}
                    </div>
                ))}
            </div>
        </div>
    )
}
export default NavLink