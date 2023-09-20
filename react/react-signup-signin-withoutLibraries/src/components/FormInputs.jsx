/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "./formInput.css";
//import PropTypes from "prop-types";

function FormInputs({
		name, 
		label, 
		placeholder, 
		type, 
		value, 
		handleOnChange, 
		errorMessage,
		required,
		pattern
	}) {

	const [focused, setFocused] = useState(false);

	const handleBlur =()=>{
		setFocused(true);
	}

	//cuando confirm password tiene el foco inmediatamente mostramos el mensaje de error
	const handleFocus=()=>{
		name ==="confirmPassword" && setFocused(true)
	}

	return (

		<div className="formInputs">

			<label htmlFor="">{label}</label>
			
			<input 
				name={name}
				type={type}
				placeholder={placeholder}
				onChange={handleOnChange}
				value={value}
				required={required}
				pattern={pattern}
				onBlur={handleBlur}
				onFocus={ handleFocus}
				focused={focused.toString()}
			/>

			<span>{errorMessage}</span>
			
		</div>
	)
}

FormInputs.propTypes = {
	

}

export default FormInputs