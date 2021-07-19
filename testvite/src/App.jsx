import React, { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Aside from "./components/Aside";
import Conatiner from "./components/Conatiner";

function App() {
	const [show, setshow] = useState(false);
	const showHide = () => {
		if (show === true) {
			setshow(false);
		} else {
			setshow(true);
		}
	};
	return (
		<>
			<div className="grid grid-cols-10">
				<Aside show={show} />
				<div className={show ? "col-span-10" : "col-span-8"}>
					<Header sh={showHide} />
					<Conatiner show={show} />
				</div>
			</div>
			<div className="mx-2 md:mx-10 lg:mx-16">
				<div className="bg-yello-100 grid grid-cols-10"></div>
			</div>
		</>
	);
}

export default App;
