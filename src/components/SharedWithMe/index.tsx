import React from "react";
import "./SharedWithMe.scss";
import Suggestions from "./Suggestions";
import AllSharedF from "./AllSharedF";

const SharedWithMe = () => {
    return (
        <>
            <div className="sharedwithme-wrapper">
                <div className="sharedwithme-heading">
                    <span>Shared With Me</span>
                </div>

                <div className="main-shared">
                    <div className="suggested">
                        <div className="suggested-head">
                            <span>Suggested</span>
                        </div>
                        <Suggestions />
                    </div>
                    <div className="shared-files">
                        <div className="shared-files-head">
                            <span>Files</span>
                        </div>
                        <AllSharedF />
                    </div>
                </div>
            </div>
        </>
    )
};

export default SharedWithMe;