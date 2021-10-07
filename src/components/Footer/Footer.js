import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub,
    faBlogger
} from "@fortawesome/free-brands-svg-icons";
import ThemeContext from "../../utils/Themes/ThemeContext";

function Footer() {
    const { isDark } = React.useContext(ThemeContext);
    const themeMode = isDark ? "dark-footer" : "light-footer";

    return (
        <div className="main-footer">
            <hr />
            <div className={`container ${themeMode}`}>
                <div className="row">
                    <div className="col">
                        <h1 className="list-unstyled">
                            <div>
                                <br />
                            </div>
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
                                    className="linkedin"
                                    href="https://www.linkedin.com/in/shubhamcodez/"
                                >
                                    {" "}
                                    <FontAwesomeIcon 
                                        icon={faLinkedin}
                                        size="2x"
                                    />
                                </a>{" "}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <a
                                    className="github"
                                    href="https://github.com/shubhamcodez"
                                >
                                    <FontAwesomeIcon
                                        icon={faGithub}
                                        size="2x"
                                    />
                                </a>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <a
                                    className="blogger"
                                    href="https://shubhamcodezportfolio.netlify.app/"
                                >
                                    <FontAwesomeIcon
                                        icon={faBlogger}
                                        size="2x"
                                    />
                                </a>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </p>
                            <div>
                                <br />
                            </div>
                        </div>
                        <ui className="list-unstyled">
                            {/* <li>DANK MEMES</li>
              <li>OTHER STUFF</li>
              <li>GUD STUFF</li> */}
                        </ui>
                    </div>
                    {/* Column3 */}
                    <div className="col">
                        {/* <h4>WELL ANOTHER COLUMN</h4> */}
                        <ui className="list-unstyled">
                            {/* <li>DANK MEMES</li>
              <li>OTHER STUFF</li>
              <li>GUD STUFF</li> */}
                        </ui>
                    </div>
                </div>

                {/* <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} THICC MEMES | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div> */}
            </div>
        </div>
    );
}

export default Footer;
