import React from 'react';
import suggLogo from "../../assets/icons/Docs.svg";
import preview from "../../assets/images/preview.png";
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

          <div className="suggestion-card">
            <div className="sugg-card-header">
              <div className="icon">
                <img src={suggLogo} width='12px' alt="" />
              </div>
              <div className="heading">
                <span>Sahu &lt;&gt; Freddy</span>
              </div>
            </div>
            <div className="sugg-preview">
              <div className="image-box">
                <img src={preview} width='100px' alt="" />
              </div>
            </div>
            <div className="sugg-card-footer">
              <span>Opened Recently!</span>
            </div>
          </div>

          <div className="suggestion-card">
            <div className="sugg-card-header">
              <div className="icon">
                <img src={suggLogo} width='12px' alt="" />
              </div>
              <div className="heading">
                <span>Sahu &lt;&gt; Freddy</span>
              </div>
            </div>
            <div className="sugg-preview">
              <div className="image-box">
                <img src={preview} width='100px' alt="" />
              </div>
            </div>
            <div className="sugg-card-footer">
              <span>Opened Recently!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Main;