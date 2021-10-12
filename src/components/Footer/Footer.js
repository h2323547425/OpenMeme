/* eslint-disable prettier/prettier */
import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub,
    faPiedPiper,
    faPaypal
} from "@fortawesome/free-brands-svg-icons";
import ThemeContext from "../../utils/Themes/ThemeContext";

function Footer() {
    const { isDark } = React.useContext(ThemeContext);
    const themeMode = isDark ? "dark-footer" : "light-footer";
    const logocolor = isDark ? "dark-logo" : "light-logo";
    return (
        <div className="main-footer">
            <hr />
            <div className={`container ${themeMode}`}>
                <div className="row">
                    <div className="col">
                        <h1 className="list-unstyled">
                            <h4>Created with Opensource. September 2021© </h4>
                        </h1>
                    </div>
                    <div className="col">
                        <div>
                            <br />
                        </div>
                        <div className="row">
                            <p className="col-sm">
                                <a
                                    href="https://www.linkedin.com/in/shubhamcodez/"
                                    className={`container ${logocolor}`}
                                >
                                    <FontAwesomeIcon icon={faLinkedin} size="1x"/>
                                </a>
                                <a
                                    href="https://github.com/shubhamcodez"
                                    className={`container ${logocolor}`}
                                >
                                    <FontAwesomeIcon
                                        icon={faGithub}
                                        size="1x"
                                    />
                                </a>
                                <a
                                    href="https://thedailyshubham.wordpress.com/"
                                    className={`container ${logocolor}`}
                                >
                                    <FontAwesomeIcon
                                        icon={faPiedPiper}
                                        size="1x"
                                    />
                                </a>
                                <a
                                    href="https://www.paypal.com/paypalme/SSingh33?locale.x=en_GB"
                                    className={`container ${logocolor}`}
                                >
                                    <FontAwesomeIcon
                                        icon={faPaypal}
                                        size="1x"
                                    />
                                </a>
                            </p>
                            <div>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
