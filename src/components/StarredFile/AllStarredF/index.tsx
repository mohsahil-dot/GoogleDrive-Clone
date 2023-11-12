import React from "react";
import suggLogo from "../../../assets/icons/Docs.svg";
import ownerLogo from "../../../assets/icons/unnamed.webp";
import mydriveLogo from "../../../assets/icons/mydrive.svg";
import { Link } from "react-router-dom";
import Tooltip from "../../Tooltip";

import "./AllStarred.scss";

const AllStarredF: React.FC = () => {
    return (
        <div className="allstarredf-wrapper">
            <div className="all-starred-files">
                <div className="starred-file-div">
                    <div className="starred-file">
                        <div className="starred-file-icon">
                            <img src={suggLogo} alt="" />
                        </div>
                        <div className="starred-file-name">
                            <div className="starred-file-name-span">
                                <span>Sahu &lt;&gt; Freddy</span>
                            </div>
                            <div className="starred-file-name-star">
                                <Tooltip text="Starred">
                                    <svg viewBox="0 0 16 16" focusable="false" fill="#000"><path d="M8,11.5133333 L12.12,14 L11.0266667,9.31333333 L14.6666667,6.16 L9.87333333,5.75333333 L8,1.33333333 L6.12666667,5.75333333 L1.33333333,6.16 L4.97333333,9.31333333 L3.88,14 L8,11.5133333 Z"></path></svg>
                                </Tooltip>
                            </div>
                        </div>
                        <div className="starred-file-owner">
                            <div className="starred-file-owner-icon">
                                <img src={ownerLogo} alt="" />
                            </div>
                            <div className="starred-file-owner-name">
                                <span>Freddy</span>
                            </div>
                        </div>
                        <div className="starred-file-time">
                            <span>08-10-2023</span>
                        </div>
                        <div className="starred-file-size">
                            <span>28 KB</span>
                        </div>
                        <div className="starred-file-location">
                            <Link className="circular-starred-file-location" to='/'>
                                <div className="loc-icon">
                                    <img src={mydriveLogo} alt="" />
                                </div>
                                <div className="loc-span">
                                    <span>My Drive</span>
                                </div>
                            </Link>
                        </div>
                        <div className="starred-file-threedots">
                            <div className="circular-three-dots">
                                <svg viewBox="0 0 24 24" focusable="false"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill='#6B6C7E'></path></svg>
                            </div>
                        </div>
                    </div>
                    <div className="starred-file-line">
                        <hr />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default AllStarredF;