import '../css/App.css';
import React from 'react';
import App from '../App.jsx';
const About = ({ theme, toggleTheme }) => ( 
	<div className="container">
		<Headers theme={theme} toggleTheme={toggleTheme} />
		<h1>About Page</h1>
		<p>This is the about page of the application.</p>
	</div>
)
export default About;