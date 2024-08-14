import { forwardRef } from "react";

const TypeBar = forwardRef(function TypeBar({addClass, placeholder}, ref) {
    return (
        <input ref={ref} type="text" className={`px-[12px] py-[10px] rounded-[5px] border border-solid border-primary-grey placeholder:text-primary-dark flex-grow ${addClass}`} placeholder={placeholder}></input>
    );
})

export default TypeBar;