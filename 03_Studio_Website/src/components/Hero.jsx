import "../components/components.css";

const Hero = () => {
	const menu = ["About", "carrer", "Events", "Products", "Support"];
	return (
		<section id="hero">
			<div className="container max-w-6xl mx-auto px-6 py-12">
				<nav className="flex items-center justify-between font-bold text-white">
					<img src="./image/logo.svg" alt="Logo" />
					<div className="hidden h-10 font-alata md:flex md:space-x-8">
						{menu &&
							menu.map((item, i) => (
								<div className="group" key={i}>
									<a href="/">{item}</a>
									<div className="mx-2 group-hover:border-b group-hover:border-b-blue-50"></div>
								</div>
							))}
					</div>
					{/* @todo Hamburger Button */}
				</nav>
				{/* @todo - Mobile Menu */}

				<div className="max-w-lg my-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl">Impressive Experiences that Deliver</div>
			</div>
		</section>
	);
};

export default Hero;
