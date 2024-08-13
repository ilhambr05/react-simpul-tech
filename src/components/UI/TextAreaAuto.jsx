import { useEffect, useRef } from "react";

function TextAreaAuto({ value, onTextChange }) {
    const textAreaRef = useRef();
    function handleChange(event) {
        const textEl = event.target;
        textEl.style.height = 'auto';
        textEl.style.height = textEl.scrollHeight + 'px';
        onTextChange(textEl.value)
        console.log(textEl.scrollHeight)
        console.log(textEl.value)
    }

    // event handlers
    useEffect(() => {
        const textEl = textAreaRef.current;

        textEl.addEventListener('change', handleChange);
        return () => {
            textEl.removeEventListener('change', handleChange);
        };
    }, []);

    return (
        <textarea rows={1} type="text" className="w-full p-1 text-primary-dark-grey border rounded-[5px] border-solid border-primary-grey min-w-[200px]"
            value={value} onChange={handleChange} ref={textAreaRef}>
        </textarea>
    );
}

export default TextAreaAuto;