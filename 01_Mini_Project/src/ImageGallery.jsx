import React from "react";
import bookmark from "./assets/image-gallery/bookmark.svg";

const ImageGallery = () => {
	function Menu({ menu }) {
		return (
			<div className="group">
				<a href="/">{menu}</a>
				<div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100 capitalize"></div>
			</div>
		);
	}

	function Image() {
		const imageData = [
			{ imageName: "image1", imagePath: "./image/image1.jpg", imageDetails: " 245 Likes - 35 Shares" },
			{ imageName: "image2", imagePath: "./image/image2.jpg", imageDetails: " 45 Likes - 36 Shares" },
			{ imageName: "image3", imagePath: "./image/image3.jpg", imageDetails: " 25 Likes - 55 Shares" },
			{ imageName: "image4", imagePath: "./image/image4.jpg", imageDetails: " 145 Likes - 35 Shares" },
			{ imageName: "image5", imagePath: "./image/image5.jpg", imageDetails: " 100 Likes - 25 Shares" },
			{ imageName: "image6", imagePath: "./image/image6.jpg", imageDetails: " 285 Likes - 15 Shares" },
		];

		return (
			<div className="grid gap-4 md:grid-cols-3 mt-3">
				{imageData &&
					imageData.map((item, i) => (
						<div className="relative group" key={i}>
							<img src={item.imagePath} alt={item.imageName} className="w-72" />
							<div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
								<div className=" flex justify-between w-full">
									<div className="font-normal">
										<p className="text-sm">Abstract Painting</p>
										<p className="text-xs">{item.imageDetails}</p>
									</div>
									<div className="flex items-center">
										<img src={bookmark} alt="Bookmark" />
									</div>
								</div>
							</div>
						</div>
					))}
			</div>
		);
	}

	const menuItem = ["Vector", "illustration", "Image", "Icon"];
	return (
		<div className="flex justify-center items-center p-10">
			<div className="bg-white p-6 m-3  shadow-2xl rounded-3xl md:p-14">
				<div className="flex flex-col items-center justify-center space-y-3 md:flex-row md:space-y-0 md:space-x-8 mb-16 md:justify-end">{menuItem && menuItem.map((item, i) => <Menu key={i} menu={item} />)}</div>
				<div className="flex flex-col justify-between  md:flex-row space-y-3 md:space-y-0">
					<div className="flex justify-between border-b">
						<input type="text" className="ml-6 border-none md:w-80 placeholder:font-thin focus:outline-none" placeholder="Search" />
						<button>
							<svg xmlns="http://www.w3.org/2000/svg" className="w-8 text-gray-300 duration-200 hover:scale-110" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<circle cx="10" cy="10" r="7" />
								<line x1="21" y1="21" x2="15" y2="15" />
							</svg>
						</button>
					</div>
					<button className="py-3 px-14 text-lg font-normal text-white bg-black rounded-md border border-black shadow-2xl duration-200 hover:bg-white hover:text-black">Upload</button>
				</div>
				<Image />
			</div>
		</div>
	);
};

export default ImageGallery;
