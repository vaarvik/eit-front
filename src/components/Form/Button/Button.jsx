import { Link } from "react-router-dom";
import "./Button.scss";

function Button({type = "button", children, preventDefault = false, href = null, onClick = () => null, className=""}) {
	const preventDefaultFunc = (e) => {
		e.preventDefault();
	}

	const CustomTag = type === "div" ? "div" : (type === "link" ? Link : "button");

	return (
		<CustomTag {...{ to: type === "link" && href ? href : "" }} className={`Button ${className}`} onClick={preventDefault ? preventDefaultFunc : onClick}>
			{ children }
		</CustomTag>
	)
}

export default Button;
