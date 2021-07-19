import React from "react";
import Title from "./Title";
import Card from "./Card";

export default function Conatiner(props) {
	return (
		<div
			className={
				props.show
					? " transition col-span-1 sm:col-span-1"
					: " transition col-span-1 sm:col-span-1"
			}>
			<Title />
			<div className=" border border-gray-600 rounded-lg mx-4 mt-12 sm:mr-0">
				<Card />
			</div>
		</div>
	);
}
