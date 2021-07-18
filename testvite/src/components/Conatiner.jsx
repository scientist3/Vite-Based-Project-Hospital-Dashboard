import React from "react";
import Title from "./Title";
import Card from "./Card";

export default function Conatiner() {
	return (
		<div className="col-span-10 sm:col-span-8">
			<Title />
			<div className=" border border-gray-600 rounded-lg mx-4 mt-12 sm:mr-0">
				<Card />
			</div>
		</div>
	);
}
