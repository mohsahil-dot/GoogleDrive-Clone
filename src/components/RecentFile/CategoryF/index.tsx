import React from "react";
import "./CategoryF.scss";

const CategoryF: React.FC = () => {
    return (
        <>
            <div className="category-f-wrapper">
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
                    <div className="three-dots">
                        <div className="circular-three-dots">
                            <svg viewBox="0 0 24 24" focusable="false"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill='#6B6C7E'></path></svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoryF;