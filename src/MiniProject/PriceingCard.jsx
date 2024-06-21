import React from "react";

const PriceingCard = () => {
	const data = [
		{
			planName: "Basic",
			storage: "100GB",
			price: "$1.99/Month",
			benefits: ["100 GB of storage", "Option to add Members", "Extra member benefits"],
			active: false,
		},
		{
			planName: "Standard",
			storage: "200GB",
			price: "$3.99/Month",
			benefits: ["200 GB of storage", "Option to add Members", "Extra member benefits"],
			active: true,
		},

		{
			planName: "Premium",
			storage: "2TB",
			price: "$8.99/Month",
			benefits: ["2TB GB of storage", "Option to add Members", "Extra member benefits"],
			active: false,
		},
	];

	return (
		<>
			<div className=" flex justify-center items-center p-10 bg-slate-800">
				<div className="flex flex-col my-6 space-y-6 md:space-y-0  md:flex-row md:space-x-6 md:my-0">
					{data.map((item, i) => (
						<div className={`${item.active ? "bg-violet-700" : "bg-slate-700"}  rounded-xl text-white`} key={i}>
							<div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
								<div className="text-center uppercase">{item.planName}</div>
								<h2 className="mt-10 font-serif text-5xl text-center ">{item.storage}</h2>
								<h3 className="mt-2 text-center">{item.price}</h3>
								<div className="flex justify-center">
									<a href="/" className={`inline-block px-10 py-3 my-6 text-center border border-violet-600 rounded-lg hover:bg-violet-800 hover:border-violet-800 duration-300 ${item.active ? "bg-violet-700" : ""}`}>
										Purchase
									</a>
								</div>
							</div>
							<div className="border-t border-slate-700"></div>
							<div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
								{item.benefits &&
									item.benefits.map((item, i) => (
										<div className="flex flex-col space-y-3" key={i}>
											<div className="flex justify-center gap-1">
												<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
													<path stroke="none" d="M0 0h24v24H0z" fill="none" />
													<path d="M5 12l5 5l10 -10" />
												</svg>
												<span className="text-[12px] ml-1">{item}</span>
											</div>
										</div>
									))}
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default PriceingCard;
