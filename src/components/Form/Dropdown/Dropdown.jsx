import { useState } from "react";
import "./Dropdown.scss";

function Dropdown({options = [{title: "None", value: 0}]}) {
    const [isUsed, setIsUsed] = useState(false);
    const onSelect = () => (setIsUsed(true));

    return (
        <div className="Dropdown">
            <select className="Dropdown__select" onChange={ onSelect }>
                { options.map((option, index) => <option className="Dropdown__option" key={index} value={option.value} disabled={(option.isDisabled && isUsed) ?? false}>{option.title}</option>) }
            </select>
        </div>

    )
}

export default Dropdown;
