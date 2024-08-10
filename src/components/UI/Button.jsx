function Button(props) {
    return (
        <button className="px-[16px] py-[8px] rounded-[5px] bg-primary-blue text-[#FFFFFF]" {...props}>
            {props.children}
        </button>
    );
}

export default Button;