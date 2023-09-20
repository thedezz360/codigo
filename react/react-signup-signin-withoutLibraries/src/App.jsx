
import { useState } from "react";
import "./App.css";
import FormInputs from "./components/FormInputs";

function App() {
	
	const [values, setValues] = useState({
		username:"",
		email:"",
		password:"",
		confirmPassword:""
	})
	

	const inputs = [
		{
			id:1,
			name:"username",
			type:"text",
			placeholder:"Username",
			label:"Username",
			errorMessage:"Username should be 3-16 characters and shouldn't include any special characters",
			required:true,
			pattern: "^[A-Za-z0-9]{3,16}$"
		},
		{
			id:2,
			name:"email",
			type:"email",
			placeholder:"Email",
			label:"Email",
			errorMessage:"It should be a valid email adress",
			required:true
		},
		{
			id:3,
			name:"password",
			type:"password",
			placeholder:"********",
			label:"Password",
			errorMessage:"Password should be 8-20 characters and include al least 1 letter, 1 number and 1 special charater",
			required:true,
			pattern:"^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[A-Za-z0-9][A-Za-z0-9!@#$%^&*()_+]{7,19}$"
		},
		{
			id:4,
			name:"confirmPassword",
			type:"password",
			placeholder:"********",
			label:"Confirm Password",
			errorMessage:"Password don't match",
			required:true,
			pattern:values.password
		}
	]

	const handleSubmit = (e)=>{
		e.preventDefault();
		
	}

	const handleOnChange = (e)=>{
		setValues({...values, [e.target.name]:e.target.value })
	}

	console.log(values);

  return (
		<div className="app">
			{console.log("render")}
			<form onSubmit={handleSubmit}>
				<h1>Register</h1>
				{inputs.map((input)=>{
					
					return(
						<FormInputs
							
							key={input.id} 
							label={input.label}
							name={input.name}
							type={input.type}
							placeholder={input.placeholder}
							handleOnChange={handleOnChange}
							value={values[input.name]}
							{...input}
							
						/>

					)
					
					// <FormInputs
					// 	onChange={hanbleOnChange}
					// 	key={input.id} 
					// 	{...input}
					// 	value={values[input.name]}
						
					// />
				})}

				<button>Submit</button>
			</form>
		</div>
	)
}

export default App;
