import checkedIcon from "../../assets/icons/UI/checkbox-checked.png";
import uncheckedIcon from "../../assets/icons/UI/checkbox-unchecked.png";

function Checkbox({ isChecked, onChange, children }) {

    return (
        <div className="flex justify-center cursor-pointer mt-[2px]">
            <img
                src={isChecked ? checkedIcon : uncheckedIcon}
                alt="Checkbox"
                className="w-[20px] h-[20px]"
                onClick={onChange}
            />
            {children}
        </div>
    );
}

export default Checkbox;