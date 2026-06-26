function Button({ variant = "light", children }) {
    return (
        <div class="h-10 sm:h-11 md:h-12 px-6 sm:px-8 md:px-10 lg:px-12 py-2 sm:py-1.5 relative bg-[#37322F] shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] overflow-hidden rounded-full flex justify-center items-center cursor-pointer">

            <div class="flex flex-col justify-center text-white text-sm sm:text-base md:text-[15px] font-medium leading-5">
                {children}
            </div>
        </div>
    );
}
export default Button;