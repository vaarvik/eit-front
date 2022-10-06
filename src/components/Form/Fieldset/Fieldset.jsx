import React from 'react'
import "./Fieldset.scss"

function Fieldset({title, children}) {
  return (
	<div className='Fieldset'>
    <fieldset>
      <legend>{title}</legend>
      {children}
    </fieldset>
  </div>
  )
}

export default Fieldset;
