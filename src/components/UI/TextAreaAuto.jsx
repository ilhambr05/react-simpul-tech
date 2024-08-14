import { useEffect, useRef } from "react";

function TextAreaAuto({ value, onTextChange }) {
    const textAreaRef = useRef();
    function handleChange(event) {
        const textEl = event.target;
        if (textEl) {
            handleHeight(textEl);
            onTextChange(textEl.value);
        }
    }

    function handleHeight(element) {
        element.style.height = "0px";
        element.style.height = `${element.scrollHeight}px`;
    }

    // event handlers
    useEffect(() => {
        const textEl = textAreaRef.current;

        // set initial height on render
        if (textEl) {
            textEl.focus();
            handleHeight(textEl);
        }
    }, []);

    return (
        <textarea rows={1} type="text" className="w-full p-1 text-primary-dark-grey border rounded-[5px] border-solid border-primary-grey min-w-[200px]"
            value={value} onChange={handleChange} ref={textAreaRef}>
        </textarea>
    );
}

export default TextAreaAuto;