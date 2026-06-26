import Button from "../ui/Button"

function Container() {
    return (
        <div class="relative flex flex-col justify-start items-center w-full">
            {/* Main container with proper margins */}
            <div class="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-265 lg:w-265 relative flex flex-col justify-start items-start min-h-screen">
                {/* Left vertical line */}
                <div class="w-px h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

                {/* Right vertical line */}
                <div class="w-px h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

                <Button>
                    Start Your Free
                </Button>
            </div>
        </div>
    )
}
export default Container