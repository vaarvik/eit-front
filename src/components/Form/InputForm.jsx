import React from 'react';
import "./InputForm.scss";
import { Form } from "react-router-dom";

function InputForm({title, method, action, children}) {
  return (
	<Form className="InputForm" method={method} action={action}>
		<div className="wrapper">
			<h2>{title}</h2>
			{children}
		</div>
	</Form>
  )
}

export default InputForm;
