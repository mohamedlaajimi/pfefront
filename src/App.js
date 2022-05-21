import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Home from "./components/Home";
class App extends React.Component {
	state = {
	  loading: true
	};
  
	componentDidMount() {
	  this.fakeRequest().then(() => {
		const el = document.querySelector(".loader-container");
		if (el) {
		  el.remove();  // removing the spinner element
		  this.setState({ loading: false }); // showing the app
		}
	  });
	}
  
	fakeRequest = () => {
	  return new Promise(resolve => setTimeout(() => resolve(), 2500));
	};
  
	render() {
	  if (this.state.loading) {
		return null; //app is not ready (fake request is in process)
	  }

	const user = localStorage.getItem("token");

	return (
		
		<Routes>
			
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/home" exact element={<Home />} />
			<Route path="/" element={<Navigate replace to="/home" />} />
		</Routes>
	);
}
	}

export default App;
