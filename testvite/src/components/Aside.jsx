import React from "react";
import Userprofile from "./Userprofile";
import Menu from "./Menu";
import Logo from "./Logo";

export default function Aside() {
	return (
		<div className="bg-gray-800 col-span-2 hidden sm:block">
			<Logo />
			<Userprofile />
			<Menu />
		</div>
	);
}
