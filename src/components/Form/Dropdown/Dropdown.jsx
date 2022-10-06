import { useState } from "react";
import "./Dropdown.scss";

function Dropdown({options = [{title: "None", value: 0}], name, onSelect = () => null}) {
    const [isUsed, setIsUsed] = useState(false);
    const onChange = (e) => {
        setIsUsed(true)
        onSelect(e.target.value)
    };

    return (
        <div className="Dropdown">
            <select required className="Dropdown__select" name={name} onChange={ onChange }>
                { options.map((option, index) => <option className="Dropdown__option" key={index} {...{ value: option.value !== options[0].value ? option.value : "" }}     disabled={(option.isDisabled && isUsed) ?? false}>{option.title}</option>) }
            </select>
        </div>

    )
}

export default Dropdown;
