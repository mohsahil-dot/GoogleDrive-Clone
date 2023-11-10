import React from "react";
import Docslogo from "../../assets/icons/Docs.svg";
import Sheetslogo from "../../assets/icons/Spreadsheets.svg";
import Slideslogo from "../../assets/icons/Slides.svg";
import Formslogo from "../../assets/icons/Forms.svg";
import fileupload from "../../assets/icons/file-upload.svg";
import folderupload from "../../assets/icons/folder-upload.svg";

import "./NewFileTip.scss";


const NewFileTip: React.FC = () => {

    return (
        <>
            <div className="newfiletip-wrapper">
                <div className="main-newfiletip">

                    <div className="new-folder">
                        <div className="main-new-folder">
                            <div className="icon">
                                <svg viewBox="0 0 24 24" focusable="false" fill="currentColor"><path d="M12 12h2v-2h2v2h2v2h-2v2h-2v-2h-2v-2zm10-4v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2l.01-12c0-1.1.89-2 1.99-2h6l2 2h8c1.1 0 2 .9 2 2zm-2 0H4v10h16V8z"></path></svg>
                            </div>
                            <div className="span">
                                <span>New Folder</span>
                            </div>
                        </div>
                    </div>
                    <hr className="new-folder-line" />
                    
                    <div className="new-upload">
                        <div className="main-file-upload">
                            <div className="icon">
                                <img src={fileupload} alt="" />
                            </div>
                            <div className="span">
                                <span>File upload</span>
                            </div>
                        </div>
                        <div className="main-folder-upload">
                            <div className="icon">
                                <img src={folderupload} alt="" />
                            </div>
                            <div className="span">
                                <span>Folder upload</span>
                            </div>
                        </div>
                    </div>
                    <hr className="new-upload-line" />

                    <div className="google-other-apps">
                        <div className="new-google-docs">
                            <a href="https://docs.google.com/document/u/0/" className="new-blank-docs" >
                                <div className="icon">
                                    <img src={Docslogo} alt="" />
                                </div>
                                <div className="span">
                                    <span>Google Docs</span>
                                </div>
                            </a>
                        </div>
                        <div className="new-google-docs">
                            <a href="https://docs.google.com/spreadsheets/u/0/" className="new-blank-docs" >
                                <div className="icon">
                                    <img src={Sheetslogo} alt="" />
                                </div>
                                <div className="span">
                                    <span>Google Sheets</span>
                                </div>
                            </a>
                        </div>
                        <div className="new-google-docs">
                            <a href="https://docs.google.com/presentation/u/0/" className="new-blank-docs" >
                                <div className="icon">
                                    <img src={Slideslogo} alt="" />
                                </div>
                                <div className="span">
                                    <span>Google Slides</span>
                                </div>
                            </a>
                        </div>
                        <div className="new-google-docs">
                            <a href="https://docs.google.com/forms/u/0/" className="new-blank-docs" >
                                <div className="icon">
                                    <img src={Formslogo} alt="" />
                                </div>
                                <div className="span">
                                    <span>Google Forms</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewFileTip;