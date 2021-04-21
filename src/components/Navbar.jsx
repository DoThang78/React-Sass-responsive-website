import React from "react";

const Navbar = () => {
    const [state, setState] = React.useState(false);
    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);
    const handleScroll = () => {
        if (window.scrollY > 80) {
            setState(true);
        } else {
            setState(false);
        }
    };

    return (
        <div className={`navbar ${state ? "whiteBg" : "transparentBg"}`}>
            <div className="container">
                <div className="navbar__content">
                    <div className="navbar__left">
                        <img
                            src={state ? "/images/logo-dark.png" : "/images/logo-light.png"}
                            alt="logo"
                        />
                    </div>
                    <ul className="navbar__right">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Showcase</a>
                        </li>
                        <li>
                            <a href="#">Portfolio </a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
