import React from "react";
import "./RecentFile.scss";
import AllRecentF from "./AllRecentF";
import CategoryF from "./CategoryF";


const RecentFile = () => {
    return (
        <>
            <div className="recentFile-wrapper">
                <div className="recentFile-heading">
                    <span>Recent</span>
                </div>
                <div className="categories">
                    <CategoryF />
                    <hr className="category-line" />
                </div>

                <div className="main-recent">
                    <AllRecentF />
                </div>
            </div>
        </>
    )
}

export default RecentFile;