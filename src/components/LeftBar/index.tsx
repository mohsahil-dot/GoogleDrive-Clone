import React from 'react';
import './LeftBar.scss';

const LeftBar: React.FC = () => {
  return (
    <>
      <div className="leftbar-wrapper">
        <div className="new">
          <span>
            <svg className="Q6yead QJZfhe " width="24" height="24" viewBox="0 0 24 24" focusable="false">
              <path d="M20 13h-7v7h-2v-7H4v-2h7V4h2v7h7v2z"></path>
            </svg>
            <span>New</span>
          </span>
        </div>
        <div className="navigation">
          <div className="my">
            <div className="my-drive">
              <span>
                <svg className=" c-qd" width="18px" height="18px" viewBox="0 0 24 24" fill="#000000" focusable="false">
                  <path d="M9.05 15H15q.275 0 .5-.137.225-.138.35-.363l1.1-1.9q.125-.225.1-.5-.025-.275-.15-.5l-2.95-5.1q-.125-.225-.35-.363Q13.375 6 13.1 6h-2.2q-.275 0-.5.137-.225.138-.35.363L7.1 11.6q-.125.225-.125.5t.125.5l1.05 1.9q.125.25.375.375T9.05 15Zm1.2-3L12 9l1.75 3ZM3 17V4q0-.825.587-1.413Q4.175 2 5 2h14q.825 0 1.413.587Q21 3.175 21 4v13Zm2 5q-.825 0-1.413-.587Q3 20.825 3 20v-1h18v1q0 .825-.587 1.413Q19.825 22 19 22Z"></path>
                </svg>
                <span>my drive</span>
              </span>
            </div>
            <div className="computer">
              <span>
                <svg className=" c-qd" width="18px" height="18px" viewBox="0 0 24 24" fill="currentColor" focusable="false">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"></path>
                </svg>
                <span>computer</span>
              </span>
            </div>
          </div>
          <div className="extras">
            <div className="shared">
              <span>
                <svg className=" c-qd" width="18px" height="18px" viewBox="0 0 24 24" fill="#000000" focusable="false">
                  <g>
                    <rect fill="none" height="18" width="18"></rect>
                  </g>
                  <g>
                    <g>
                      <path d="M15,8c0-1.42-0.5-2.73-1.33-3.76C14.09,4.1,14.53,4,15,4c2.21,0,4,1.79,4,4s-1.79,4-4,4c-0.43,0-0.84-0.09-1.23-0.21 c-0.03-0.01-0.06-0.02-0.1-0.03C14.5,10.73,15,9.42,15,8z M16.66,13.13C18.03,14.06,19,15.32,19,17v3h4v-3 C23,14.82,19.42,13.53,16.66,13.13z M9,4c2.21,0,4,1.79,4,4s-1.79,4-4,4s-4-1.79-4-4S6.79,4,9,4z M9,13c2.67,0,8,1.34,8,4v3H1v-3 C1,14.34,6.33,13,9,13z"></path>
                    </g>
                  </g>
                </svg>
                <span>shared with me</span>
              </span>
            </div>
            <div className="recent">
              <span>
                <svg className="c-qd " width="18px" height="18px" viewBox="0 0 24 24" fill="#000000" focusable="false"><g><rect fill="none" height="24" width="24"></rect></g><g><path d="M11.99,2C6.47,2,2,6.48,2,12s4.47,10,9.99,10C17.52,22,22,17.52,22,12S17.52,2,11.99,2z M15.29,16.71L11,12.41V7h2v4.59l3.71,3.71L15.29,16.71z"></path></g></svg>
                <span>recent</span>
              </span>
            </div>
            <div className="bin">
              <span>
                <svg className=" c-qd" width="18px" height="18px" viewBox="0 0 24 24" focusable="false" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>
                <span>Starred</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LeftBar;