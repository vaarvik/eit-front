import { Link } from "react-router-dom";
import "./Button.scss";

function Button({type = "button", children, preventDefault = false, href = null}) {
	const preventDefaultFunc = (e) => {
		e.preventDefault();
	}

	const CustomTag = type === "div" ? "div" : (type === "link" ? Link : "button");

	return (
		<CustomTag {...{ to: type === "link" && href ? href : "" }} className={`Button`} onClick={preventDefault ? preventDefaultFunc : null}>
			{ children }
		</CustomTag>
	)
}

export default Button;
