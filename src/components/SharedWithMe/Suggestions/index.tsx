import React from "react";
import suggLogo from "../../../assets/icons/Docs.svg";
import preview from "../../../assets/images/preview.png";

import "./Suggestions.scss";

const Suggestions: React.FC = () => {
    return (
        <>
            <div className="suggestions-wrapper">
                <div className="suggestion-card">
                    <div className="sugg-card-header">
                        <div className="icon">
                            <img src={suggLogo} alt="" />
                        </div>
                        <div className="heading">
                            <span>Sahu &lt;&gt; Freddy</span>
                        </div>
                    </div>
                    <div className="sugg-preview">
                        <div className="image-box">
                            <img src={preview} alt="" />
                        </div>
                    </div>
                    <div className="sugg-card-footer">
                        <span>Opened Recently!</span>
                    </div>
                </div>

                <div className="suggestion-card">
                    <div className="sugg-card-header">
                        <div className="icon">
                            <img src={suggLogo} alt="" />
                        </div>
                        <div className="heading">
                            <span>Sahu &lt;&gt; Freddy</span>
                        </div>
                    </div>
                    <div className="sugg-preview">
                        <div className="image-box">
                            <img src={preview} alt="" />
                        </div>
                    </div>
                    <div className="sugg-card-footer">
                        <span>Opened Recently!</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Suggestions;