function Button({type="button", addClass, children}) {
    return (
        <button type={type} className={`px-[16px] py-[8px] rounded-[5px] bg-primary-blue text-[#FFFFFF] ${addClass}`}>
            {children}
        </button>
    );
}

export default Button;