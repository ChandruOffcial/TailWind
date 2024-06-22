const Footer = () => {
    const data = [
        { title1: "FAQs", title2: "Contact Us" },
        { title1: "Privacy Policy", title2: "Press Kit" },
        { title1: "Install Guide" },
    ];

    const iconPaths = [
        "./image/icon-facebook.svg",
        "./image/icon-twitter.svg",
        "./image/icon-instagram.svg",
    ];
    return (
        <footer className="bg-gray-50">
            <div className="section_container">
                <div className="flex flex-col items-center justify-between md:flex-row">
                    <img src="./image/logo.svg" alt="" className="scale-50" />

                    <div className="mb-10 flex flex-1 flex-col items-center justify-between space-y-6 text-grayishBlue md:mb-0 md:flex-row md:space-y-0">
                        <div className="flex flex-col space-y-4 md:ml-24 md:flex-row md:space-x-24 md:space-y-0">
                            {data &&
                                data.map((item, i) => (
                                    <div
                                        className="flex flex-col space-y-4 text-center md:text-left"
                                        key={i}
                                    >
                                        <div>
                                            <a
                                                href="/"
                                                className="hover:text-strongCyan"
                                            >
                                                {item?.title1}
                                            </a>
                                        </div>
                                        <div>
                                            <a
                                                href="/"
                                                className="hover:text-strongCyan"
                                            >
                                                {item?.title2}
                                            </a>
                                        </div>
                                    </div>
                                ))}
                        </div>

                        <div className="flex w-32 justify-between py-1">
                            {iconPaths &&
                                iconPaths.map((item, i) => (
                                    <a href="/" key={i}>
                                        <img
                                            src={item}
                                            alt=""
                                            className="ficon duration-200"
                                        />
                                    </a>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
