import React from "react";
import suggLogo from "../../../assets/icons/Docs.svg";
import ownerLogo from "../../../assets/icons/unnamed.webp";
import mydriveLogo from "../../../assets/icons/mydrive.svg";
import { Link } from "react-router-dom";

import "./BinFiles.scss";

const BinFiles: React.FC = () => {
    return (
        <div className="binfiles-wrapper">
            <div className="all-bin-files">
                <div className="bin-file-div">
                    <div className="bin-file">
                        <div className="bin-file-icon">
                            <img src={suggLogo} alt="" />
                        </div>
                        <div className="bin-file-name">
                            <span>Sahu &lt;&gt; Freddy</span>
                        </div>
                        <div className="bin-file-owner">
                            <div className="bin-file-owner-icon">
                                <img src={ownerLogo} alt="" />
                            </div>
                            <div className="bin-file-owner-name">
                                <span>Freddy</span>
                            </div>
                        </div>
                        <div className="bin-file-time">
                            <span>08-10-2023</span>
                        </div>
                        <div className="bin-file-size">
                            <span>28 KB</span>
                        </div>
                        <div className="bin-file-location">
                            <Link className="circular-bin-file-location" to='/'>
                                <div className="loc-icon">
                                    <img src={mydriveLogo} alt="" />
                                </div>
                                <div className="loc-span">
                                    <span>My Drive</span>
                                </div>
                            </Link>
                        </div>
                        <div className="bin-file-threedots">
                            <div className="circular-three-dots">
                                <svg viewBox="0 0 24 24" focusable="false"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill='#6B6C7E'></path></svg>
                            </div>
                        </div>
                    </div>
                    <div className="bin-file-line">
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BinFiles;