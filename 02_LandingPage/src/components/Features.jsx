import React from "react";

const Features = () => {
    const data = [
        {
            title: "Quick Search",
            para: "Easily search your snippets by content,category, web address, application, and more.",
        },
        {
            title: "iCloud Sync",
            para: "Instantly saves and syncs snippets across all your devices.",
        },
        {
            title: "Completely History",
            para: "Retrieve any snippets from the first moment you started using the app.",
        },
    ];
    return (
        <section>
            <div className="section_container my-0">
                <div className="relative flex flex-col md:flex-row md:space-x-10">
                    <div className="md:w-1/2">
                        <img
                            src="./image/image-computer.png"
                            alt="computer"
                            className="right-[50%] top-0 md:absolute"
                        />
                    </div>

                    <div className="mb-24 mt-16 flex flex-col space-y-12 text-center text-xl md:mb-16 md:p-16 md:text-left">
                        {data &&
                            data.map((item, i) => (
                                <div key={i}>
                                    <h5>{item.title}</h5>
                                    <p className="max-w-md text-grayishBlue">
                                        {item.para}
                                    </p>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
