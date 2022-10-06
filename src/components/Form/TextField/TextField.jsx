import "./TextField.scss";

function TextField({title, name, id, type = "input"}){
    return (
        <div className="TextField">
            <input type={type} className="TextField__input" id={id} name={name} />
            <label htmlFor={id} className="TextField__label">{title}</label>
        </div>
    )
}

export default TextField;
