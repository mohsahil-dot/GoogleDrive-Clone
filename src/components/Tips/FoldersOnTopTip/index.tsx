import React from "react";

import "./FoldersOnTopTip.scss";


const FoldersOnTopTip: React.FC = () => {
    return (
        <>
            <div className="foldersontoptip-wrapper">

                <div className="span">
                    <span>Show folders</span>
                </div>

                <div className="checkboxes">
                    <div className="first-checkbox">
                        <input type="checkbox" name="Ontop" value='Ontop' className="checkbox" />
                        <label htmlFor="Ontop">On top</label>
                    </div>
                    <div className="second-checkbox">
                        <input type="checkbox" name="mixed" value='mixed' className="checkbox" />
                        <label htmlFor="mixed">Mixed with files</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FoldersOnTopTip;