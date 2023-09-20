/* eslint-disable react/prop-types */
import React from "react";
import styled, {css, keyframes, ThemeProvider, createGlobalStyle} from "styled-components";


function StyleComponents() {
	let mainColor = "#db7093";
	let	mainAlphaColor80 = "#db709380"; 

	const setTransitionTime=(time)=> `all ${time} ease-out`;

	//keyframe
	const fadeIn = keyframes`
	0%{
		opacity:0;
	}
	100%{
		opacity:1;
	}
	`;
 
	const Myh3 = styled.h3`

		color: ${({color}) => color || "#fff"};
		background-color: ${mainColor};
		transition:${setTransitionTime("1s")}; 
		animation:${fadeIn} 5s ease-out;


		/* ${({isButton}) => isButton && css`
			margin:auto;
			max-width:50%;
			border-radius:0.25rem;
			cursor:pointer;
		`} */

		&:hover {
			background-color: ${mainAlphaColor80};
		}

	`;

	//theme provaider

	const light={
		color:"#222",
		bgColor:"#ddd"
	};
	const dark={
		color:"#ddd",
		bgColor:"#222"
	};

	const Box = styled.div`
		padding:1rem;
		margin:1rem;
		color:${({theme})=>theme.color};
		background-color:${({theme})=>theme.bgColor};
	`;

	//herencia
	const BoxRounded =styled(Box)`
		border-radius:1rem;
	`;

	//global styles
	const GlobalStyle = createGlobalStyle`
		h1{
			padding: 2rem;
			background-color: #fff;
			color:#61dafb;
			text-transform: uppercase;
		}

	`;

	return (
		<div>
			<GlobalStyle />
			<h1>StyleComponents</h1>
			<Myh3>con Style components</Myh3>
			<Myh3 color="#61dafb">
				con Style components
			</Myh3>
			<Myh3 isButton>
				ahora soy un boton
			</Myh3>

			<ThemeProvider theme={light}>
				<Box>caja light</Box>
				<BoxRounded>caja rounded con herencia</BoxRounded>
			</ThemeProvider>

			<ThemeProvider theme={dark}>
				<Box>caja dark</Box>
				<BoxRounded>caja rounded con herencia</BoxRounded>
			</ThemeProvider>
			
		</div>
	);
}




export default StyleComponents;
