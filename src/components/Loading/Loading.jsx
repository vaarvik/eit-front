import React from 'react'
import gif from "../../assets/images/boat-gif.gif"
import "./Loading.scss";

export default function Loading() {
  return (
	<div className="Loading">
		<img src={gif} alt="A boat gif used for loading" />
	</div>
  )
}
