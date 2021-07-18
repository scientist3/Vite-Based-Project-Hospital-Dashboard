import React from "react";
import Header from "./components/Header";
import "./App.css";
import Aside from "./components/Aside";
import Conatiner from "./components/Conatiner";

function App() {
	return (
		<div className="mx-2 md:mx-10 lg:mx-16">
			<Header />
			<div className="bg-yello-100 grid grid-cols-10">
				<Aside />
				<Conatiner />
			</div>
		</div>
	);
}

export default App;
