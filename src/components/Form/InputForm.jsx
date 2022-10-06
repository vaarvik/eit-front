import "./InputForm.scss";
import { Form } from "react-router-dom";
import { useState } from "react";

function InputForm({title, method, action, children, onSubmit = () => (null)}) {
	const [formData, setFormData] = useState({})
	const onChange = (e) => {
		setFormData({
			...formData,
			[e.target.name] : e.target.value
		})
	}

	const onFormSubmit = (e) => {
		e.preventDefault();
		onSubmit(formData);
	}

	return (
		<Form className="InputForm" method={method} action={action} onSubmit={onFormSubmit} onChange={onChange}>
			<div className="wrapper">
				<h2>{title}</h2>
				{children}
			</div>
		</Form>
  	)
}

export default InputForm;
