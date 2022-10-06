import { useState } from "react";
import "./TextField.scss";

function TextField({title, name, id, type = "input", min=0, max=100}){
    const [hasValue, setHasValue] = useState(false);
    const [value, setValue] = useState("")
    const onChange = (e) => {
        setValue(e.target.value);

        if(type === "number") {
            if(e.target.value > max) setValue(max);
            if(e.target.value < min) setValue(min);
        }

        if(e.target.value && !hasValue) setHasValue(true)
        else if(hasValue) setHasValue(false);
    }

    let numberProps = {};
    if(type === "number") {
        numberProps = {
            min,
            max,
        }
    }

    return (
        <div className="TextField">
            <input {...numberProps} type={type} className={`TextField__input${hasValue ? " active" : ""}`} id={id} name={name} onChange={onChange} value={value}/>
            <label htmlFor={id} className="TextField__label">{title}</label>
        </div>
    )
}

export default TextField;
