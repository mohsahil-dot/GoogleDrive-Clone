import React from "react";
import suggLogo from "../../../assets/icons/Docs.svg";
import ownerLogo from "../../../assets/icons/unnamed.webp";
import "./AllSharedF.scss";

const AllSharedF: React.FC = () => {
    return (
        <>
            <div className="allsharedf-wrapper">
                <div className="category-files">
                    <div className="category">
                        <div className="icons">
                            <span></span>
                        </div>
                        <div className="names">
                            <div className="circular-names">
                                <span>Name</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
                                    <path d="M3.21478 6.37804L7.48679 10.6499C7.76929 10.9323 8.23071 10.9323 8.51321 10.6499L12.7852 6.37804C13.2435 5.91979 12.9202 5.13824 12.2704 5.13824H3.72956C3.07981 5.13824 2.75651 5.91979 3.21478 6.37804Z" fill='#6B6C7E'/>
                                </svg>
                            </div>
                        </div>
                        <div className="owners">
                            <span>Shared By</span>
                        </div>
                        <div className="shareDate">
                            <div className="circular-shareDate">
                                <span>Share Date</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
                                    <path d="M3.21478 6.37804L7.48679 10.6499C7.76929 10.9323 8.23071 10.9323 8.51321 10.6499L12.7852 6.37804C13.2435 5.91979 12.9202 5.13824 12.2704 5.13824H3.72956C3.07981 5.13824 2.75651 5.91979 3.21478 6.37804Z" fill='#6B6C7E'/>
                                </svg>
                            </div>
                        </div>
                        <div className="three-dots">
                            <div className="circular-three-dots">
                                <svg viewBox="0 0 24 24" focusable="false"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill='#6B6C7E'></path></svg>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="category-line" />

                <div className="all-files">
                    <div className="file-div">
                        <div className="file">
                            <div className="file-icon">
                                <img src={suggLogo} alt="" />
                            </div>
                            <div className="file-name">
                                <span>Sahu &lt;&gt; Freddy</span>
                            </div>
                            <div className="file-owner">
                                <div className="file-owner-icon">
                                    <img src={ownerLogo} alt="" />
                                </div>
                                <div className="file-owner-name">
                                    <span>Freddy</span>
                                </div>
                            </div>
                            <div className="file-share-date">
                                <span>08-12-2023</span>
                            </div>
                            <div className="file-threedots">
                                <div className="circular-three-dots">
                                    <svg viewBox="0 0 24 24" focusable="false"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
                                </div>
                            </div>
                        </div>
                        <div className="file-hr">
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllSharedF;