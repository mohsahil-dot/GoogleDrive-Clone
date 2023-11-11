import React from "react";
import "./RecentFile.scss";
import AllRecentF from "./AllRecentF";


const RecentFile = () => {
    return (
        <>
            <div className="recentFile-wrapper">
                <div className="recentFile-heading">
                    <span>Recent</span>
                </div>

                <div className="main-recent">
                    <div className="recent-files">
                        <AllRecentF />
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecentFile;