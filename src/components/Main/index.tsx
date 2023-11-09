import React from 'react';
import suggLogo from "../../assets/icons/Docs.svg";
import preview from "../../assets/images/preview.png";
import user1 from "../../assets/images/user1.webp"
import "./Main.scss";

const Main = () => {
  return (
    <>
    <div className='main-wrapper'>
      <div className="my-drive-dropdown">
        <span>My Drive</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
          <path d="M3.21478 6.37804L7.48679 10.6499C7.76929 10.9323 8.23071 10.9323 8.51321 10.6499L12.7852 6.37804C13.2435 5.91979 12.9202 5.13824 12.2704 5.13824H3.72956C3.07981 5.13824 2.75651 5.91979 3.21478 6.37804Z" fill="#272833"/>
        </svg>
      </div>
      <div className="main-drive">
        <div className="suggested">
          <div className="suggested-head">
            <span>Suggested</span>
          </div>

          <div className="suggestion-cards">
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
        </div>
        <div className="files">
          <div className="files-head">
            <span>Files</span>
          </div>
          <div className="every-file">
            <div className="category-files">
              <div className="category">
                <div className="icons">
                  <span></span>
                </div>
                <div className="names">
                  <span>Name</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
                    <path d="M3.21478 6.37804L7.48679 10.6499C7.76929 10.9323 8.23071 10.9323 8.51321 10.6499L12.7852 6.37804C13.2435 5.91979 12.9202 5.13824 12.2704 5.13824H3.72956C3.07981 5.13824 2.75651 5.91979 3.21478 6.37804Z" fill='#6B6C7E'/>
                  </svg>
                </div>
                <div className="owners">
                  <span>Owner</span>
                </div>
                <div className="last-modifications">
                  <span>Last Modified</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
                    <path d="M3.21478 6.37804L7.48679 10.6499C7.76929 10.9323 8.23071 10.9323 8.51321 10.6499L12.7852 6.37804C13.2435 5.91979 12.9202 5.13824 12.2704 5.13824H3.72956C3.07981 5.13824 2.75651 5.91979 3.21478 6.37804Z" fill='#6B6C7E'/>
                  </svg>
                </div>
                <div className="file-sizes">
                  <span>File Size</span>
                </div>
              </div>
            </div>
            <hr />
            <div className="all-files">
              <div className="file">
                <div className="file-icon">
                  <img src={suggLogo} alt="" />
                </div>
                <div className="file-name">
                  <span>Sahu &lt;&gt; Freddy</span>
                </div>
                <div className="file-owner">
                  <div className="file-owner-icon">
                    <img src={user1} alt="" />
                  </div>
                  <div className="file-owner-name">
                    <span>ak0sty</span>
                  </div>
                </div>
                <div className="file-last-modified">
                  <span>08-12-2022</span>
                </div>
                <div className="file-file-size">
                  <span>24kb</span>
                </div>
                <div className="file-hr">
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Main;