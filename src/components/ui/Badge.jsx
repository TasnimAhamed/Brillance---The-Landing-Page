import IconComponent from "./IconComponent"

function Badge({type, text}) {
    return (
        <div
            className="px-3.5 py-1.5 bg-white overflow-hidden rounded-[90px] flex justify-start items-center gap-2 border border-[rgba(2,6,23,0.08)] shadow-xs"
        >
            <IconComponent type={type} />
            <div
                className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3"
            >
                {text}
            </div>
        </div>
    )
}
export default Badge