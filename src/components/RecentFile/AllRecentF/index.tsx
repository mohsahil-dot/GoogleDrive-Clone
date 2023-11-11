import React from "react";
import suggLogo from "../../../assets/icons/Docs.svg";
import ownerLogo from "../../../assets/icons/unnamed.webp";
import mydriveLogo from "../../../assets/icons/mydrive.svg";
import { Link } from "react-router-dom";

import "./AllRecentF.scss";

const AllRecentF: React.FC = () => {
    return (
        <div className="allrecentf-wrapper">
            <div className="category-files">
                <div className="category">
                    <div className="icons">
                        <span></span>
                    </div>
                    <div className="names">
                        <span>Name</span>
                    </div>
                    <div className="time">
                        <span></span>
                    </div>
                    <div className="owners">
                        <span>Owner</span>
                    </div>
                    <div className="file-size">
                        <span>File Size</span>
                    </div>
                    <div className="location">
                        <span>Location</span>
                    </div>
                </div>
            </div>

            <hr className="category-line" />

            <div className="all-recent-files">
                <div className="recent-file-div">
                    <div className="recent-file">
                        <div className="recent-file-icon">
                            <img src={suggLogo} alt="" />
                        </div>
                        <div className="recent-file-name">
                            <span>Sahu &lt;&gt; Freddy</span>
                        </div>
                        <div className="recent-file-time">
                            <span>08-10-2023</span>
                        </div>
                        <div className="recent-file-owner">
                            <div className="recent-file-owner-icon">
                                <img src={ownerLogo} alt="" />
                            </div>
                            <div className="recent-file-owner-name">
                                <span>Freddy</span>
                            </div>
                        </div>
                        <div className="recent-file-size">
                            <span>28 KB</span>
                        </div>
                        <div className="recent-file-location">
                            <Link className="circular-recent-file-location" to='/'>
                                <div className="loc-icon">
                                    <img src={mydriveLogo} alt="" />
                                </div>
                                <div className="loc-span">
                                    <span>My Drive</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="recent-file-line">
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllRecentF;