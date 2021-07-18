import React from "react";

export default function Userprofile() {
	return (
		<div className=" text-white my-8">
			<div className="w-full flex justify-center">
				<img
					className="w-16 h-16 rounded-full"
					src="../../assets/images/user.jpg"
					alt=""
				/>
			</div>
			<p className="text-center mt-4">Dr Anees Akbar</p>
			<p className="text-center mt-2 relative flex justify-center items-center">
				<div className="mr-1 rounded-full h-2 w-2 bg-green-700"></div>
				Online
			</p>
		</div>
	);
}
