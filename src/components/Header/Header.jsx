import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/images/logo.png"
import useCitiesStore from '../../store/store';
import "./Header.scss";

export default function Header() {
	const logout = useCitiesStore(state => state.logout);
  return (
	<header className='Header'>
		<Link to="/">
			<div className="Header__logo">
				<img src={logo} alt="The logo of East India Trading Co." />
			</div>
			{

			}
		</Link>
		<div className='Header__logout' onClick={logout}>
			Logout
		</div>
	</header>
  )
}
