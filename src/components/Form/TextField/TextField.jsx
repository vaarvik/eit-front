import { useState } from "react";
import "./TextField.scss";

function TextField({title, onChange=() => null, name, id, type = "input", min=0, max=100}){
    const [hasValue, setHasValue] = useState(false);
    const [value, setValue] = useState("")
    const onChangeBase = (e) => {
        setValue(e.target.value);

        if(type === "number") {
            if(e.target.value > max) setValue(max);
            if(e.target.value < min) setValue(min);
        }

        if(e.target.value && !hasValue) setHasValue(true)
        else if(hasValue) setHasValue(false);
        onChange(e);
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
            <input {...numberProps} required type={type} className={`TextField__input${hasValue ? " active" : ""}`} id={id} name={name} onChange={onChangeBase} value={value}/>
            <label htmlFor={id} className="TextField__label">{title}</label>
        </div>
    )
}

export default TextField;
