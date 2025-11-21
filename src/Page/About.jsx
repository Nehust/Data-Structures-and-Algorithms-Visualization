import '../css/App.css';
import React from 'react';
import Headers from '../components/Header.jsx';
export default function About({ theme, toggleTheme }) { 
	return (
		<div className="container">
			<Headers theme={theme} toggleTheme={toggleTheme} />
			<h1>About Page</h1>
			<p>This is the about page of the application.</p>
		</div>
	);
}