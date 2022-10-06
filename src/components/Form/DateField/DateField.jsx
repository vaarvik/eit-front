import "./DateField.scss";

function DateField({title, name, id, onChange}){
    return (
        <div className="DateField">
            <label htmlFor={id} className="DateField__label">{title}</label>
            <input required type="date" className={`DateField__input`} id={id} name={name} min={new Date().toISOString().slice(0, 10)} />
        </div>
    )
}

export default DateField;
