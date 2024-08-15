import checkedIcon from "../../assets/icons/UI/checkbox-checked.png";
import uncheckedIcon from "../../assets/icons/UI/checkbox-unchecked.png";

function Checkbox({ isChecked, onChange, children }) {

    return (
        <div className="flex justify-center mt-[2px]">
            <img
                src={isChecked ? checkedIcon : uncheckedIcon}
                alt="Checkbox"
                className="w-[20px] max-w-[unset] h-[20px] cursor-pointer"
                onClick={onChange}
            />
            {children}
        </div>
    );
}

export default Checkbox;