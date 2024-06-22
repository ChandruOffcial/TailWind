import React from "react";

const CTA = () => {
    function Btn({ color, content }) {
        return (
            <a
                href="/"
                className={`rounded-full p-4 px-8 shadow-lg ${color} duration-200 hover:opacity-80`}
            >
                {content}
            </a>
        );
    }
    return (
        <section>
            <div className="section_container mb-20 pt-16">
                <h3>Clipboard for iOS and MacOS</h3>
                <p className="mx-auto mb-10 max-w-3xl text-2xl text-grayishBlue">
                    Available for free on the App Store. Download for Mac or
                    iOS, sync with iCloud and you're ready to start adding to
                    your clipboard.
                </p>
                <div className="btn_container">
                    <Btn color={"bg-strongCyan"} content={"Download for IOS"} />
                    <Btn color={"bg-lightBlue"} content={"Download for Mac"} />
                </div>
            </div>
        </section>
    );
};

export default CTA;
