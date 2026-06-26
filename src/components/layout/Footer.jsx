import IconComponent from "../ui/IconComponent"
import NavLink from "../ui/NavGroup"

const socialIcons = [
    "X",
    "linkedIn",
    "github"
]
const navLinks = [
    {
        title: "Product",
        links: [
            "Features",
            "Pricing",
            "Integrations",
            "Real-time Previews",
            "Multi-Agent Coding"
        ]
    },
    {
        title: "Company",
        links: [
            "About us",
            "Our team",
            "Careers",
            "Brand",
            "Contact"
        ]
    },
    {
        title: "Resources",
        links: [
            "Blog",
            "Documentation",
            "Templates",
            "Help Center",
            "Resources"
        ]
    }
]
function Footer() {
    return (
        <div
            className="w-full pt-10 flex flex-col justify-start items-start border-t border-[rgba(55,50,47,0.12)]"
        >
            {/* Main Footer Content */}
            <div
                className="self-stretch h-auto flex flex-col md:flex-row justify-between items-stretch pr-0 pb-8 pt-0"
            >
                {/* Brand Section */}
                <div
                    className="h-auto p-4 md:p-8 flex flex-col justify-start items-start gap-8"
                >
                    <div className="flex flex-col gap-4">
                        <div
                            className="self-stretch flex justify-start items-center gap-3"
                        >
                            <div
                                className="text-center text-[#49423D] text-xl font-semibold leading-4"
                            >
                                Brillance
                            </div>
                        </div>
                        <div
                            className="text-[rgba(73,66,61,0.90)] text-sm font-medium leading-4.5"
                        >
                            Coding made effortless
                        </div>
                    </div>
                    {/* Social Icons */}
                    <div
                        className="flex justify-start items-start gap-4"
                    >
                        {socialIcons.map((icon, index) => (
                            <div
                                key={index}
                                className="w-6 h-6 relative overflow-hidden"
                            >
                                <IconComponent type={icon} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Links */}
                <div
                    className="self-stretch p-4 md:p-8 flex flex-col sm:flex-row flex-wrap justify-start sm:justify-between items-start gap-6 md:gap-8"
                >
                    {navLinks.map((navLink, index) => (
                        <NavLink
                            key={index}
                            title={navLink.title}
                            navLinks={navLink.links}
                        />
                    ))}
                </div>
            </div>

            {/* Bottom Pattern */}
            <div
                className="self-stretch h-12 relative overflow-hidden border-t border-b border-[rgba(55,50,47,0.12)]"
            >
                <div
                    className="absolute inset-0 w-full h-full overflow-hidden"
                >
                    <div className="w-full h-full relative flex items-center justify-center">
                        <div className="text-[rgba(73,66,61,0.50)] text-sm">
                            copyright @2026 Brillance
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer