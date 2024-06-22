import React from "react";

const SuperCharge = () => {
    const data = [
        {
            imagePath: "./image/icon-blacklist.svg",
            title: "Create Blacklists",
            content:
                "Easily search your snippets by content, category, web address, application, and more.",
        },
        {
            imagePath: "./image/icon-text.svg",
            title: "Plain Text Snippets",
            content:
                "Remove unwanted formatting from copied text for a consistent look.",
        },
        {
            imagePath: "./image/icon-preview.svg",
            title: "Sneak Preview",
            content:
                "Quick preview of all snippets on your Clipboard for easy access.",
        },
    ];
    return (
        <section>
            <div className="section_container my-10">
                <h3>Supercharge your workflow</h3>
                <p className="section_content mb-16">
                    We've got the tools to boost your productivity.
                </p>
                <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-x-12 md:space-y-0">
                    {data &&
                        data.map((item, i) => (
                            <div
                                className="flex flex-col items-center space-y-5"
                                key={i}
                            >
                                <img
                                    src={item.imagePath}
                                    alt=""
                                    className="mb-6"
                                />
                                <h5>{item.title}</h5>
                                <p className="max-w-md text-grayishBlue">
                                    {item.content}
                                </p>
                            </div>
                        ))}
                </div>
            </div>
            <div className="mx-auto my-16 flex max-w-6xl flex-col items-center justify-between gap-2 space-y-16 px-10 md:flex-row md:space-y-0">
                <img src="image/logo-google.png" alt="" />
                <img src="image/logo-ibm.png" alt="" />
                <img src="image/logo-microsoft.png" alt="" />
                <img src="image/logo-hp.png" alt="" />
                <img src="image/logo-vector-graphics.png" alt="" />
            </div>
        </section>
    );
};

export default SuperCharge;
