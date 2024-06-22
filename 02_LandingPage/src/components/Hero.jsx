import React from "react";
import Logo from "./svg/Logo";

const Hero = () => {
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
                <Logo />
                <h3>A history of everything you copy</h3>
                <p className="mx-auto mb-10 max-w-3xl text-2xl text-grayishBlue">
                    Clipboard allows you to track and organize everything you
                    copy. Instantly access your clipboard on all your devices.
                </p>
                <div className="btn_container">
                    <Btn color={"bg-strongCyan"} content={"Download for IOS"} />
                    <Btn color={"bg-lightBlue"} content={"Download for Mac"} />
                </div>
            </div>
        </section>
    );
};

export default Hero;
