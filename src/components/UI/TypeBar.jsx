import { forwardRef } from "react";

const TypeBar = forwardRef(function TypeBar(props, ref) {
    return (
        <input ref={ref} type="text" className="px-[12px] py-[10px] rounded-[5px] border border-solid border-primary-grey placeholder:text-primary-dark flex-grow" {...props}></input>
    );
})

export default TypeBar;