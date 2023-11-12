import React from "react";
import CategoryStarred from "./CategoryStarred";
import AllStarredF from "./AllStarredF";

import "./StarredFile.scss";

const StarredFile = () => {
    return (
        <div className="starredfile-wrapper">
            <div className="starredfile-heading">
                <span>Starred</span>
            </div>
            <div className="starred-categories">
                <CategoryStarred />
                <hr className="category-line" />
            </div>

            <div className="main-starred">
                <AllStarredF />
            </div>
        </div>
    )
}

export default StarredFile;