import React from "react";

export default function Title() {
	return (
		<div className="flex justify-items-start place-items-center bg-green-100 ">
			<div className="m-2 ">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-16 w-16 text-green-700"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
					/>
				</svg>
			</div>
			<div className="ml-4 p-4 bg-green-100 w-full">
				<p className="text-xl uppercase font-bold text-green-700">Department</p>
				<p className="text-xs pl-2 flex items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
						/>
					</svg>
					Department List
				</p>
			</div>
		</div>
	);
}
