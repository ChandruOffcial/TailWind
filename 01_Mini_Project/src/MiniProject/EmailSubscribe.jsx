import React from "react";
import image from "../assets/email-subscribe/image.jpg";

const EmailSubscribe = () => {
	return (
		<div className=" flex justify-center items-center p-10">
			<div className="bg-zinc-800 p-2 mx-6 rounded-2xl">
				<div className="flex flex-col md:flex-row rounded-l-lg">
					<img src={image} alt="subscribe" className="object-cover h-80 rounded-xl md:h-64 md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-300" />
					<div className="p-6 md:p-12">
						<h2 className="font-serif text-xl font-medium text-center text-white md:text-left">Get diet and fitness tips in your inbox</h2>
						<p className="max-w-xs my-4 text-xs leading-5 tracking-wide text-center text-white md:text-left">Eat Better and exercise better. Sign up for the Diet & Fitness newsletter.</p>
						<div className="flex flex-col mt-5 space-y-4 md:space-x-3 md:flex-row md:space-y-0">
							<input type="text" placeholder="Enter Your Email address" className="p-2 px-4 text-center text-white bg-zinc-800 border border-zinc-600 placeholder:text-xs placeholder:text-center md:text-left placeholder:md:text-left focus:outline-none" />
							<button className="px-5 py-3 text-xs rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-800 hover:text-white duration-300">Subscribe</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EmailSubscribe;
