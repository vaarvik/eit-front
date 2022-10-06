import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/images/logo.png"
import "./Header.scss";

export default function Header() {
  return (
	<header className='Header'>
		<Link to="/">
			<div className="Header__logo">
				<img src={logo} alt="The logo of East India Trading Co." />
			</div>
		</Link>
	</header>
  )
}
