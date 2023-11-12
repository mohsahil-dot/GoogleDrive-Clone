import React from "react";

import "./TrashFile.scss";
import TrashCategory from "./TrashCategory";
import BinFiles from "./BinFiles";

const TrashFile = () => {
    return (
        <div className="trashfile-wrapper">
            <div className="upperTrash">
                <div className="trashfile-heading">
                    <span>Bin for My Drive</span>
                </div>

                <div className="trash-tagline">
                    <div className="line">
                        <span>Items in the bin will be deleted forever after 30 days</span>
                    </div>
                    <div className="empty-button">
                        <div className="empty-button-circular">
                            <span>Empty bin</span>
                        </div>
                    </div>
                </div>

            </div>
            <div className="trash-categories">
                <TrashCategory />
                <hr className="category-line" />
            </div>

            <div className="main-trash">
                <BinFiles />
            </div>
        </div>
    )
}

export default TrashFile;