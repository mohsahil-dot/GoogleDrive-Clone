import React from 'react';
import './LeftBar.scss';
import { Link } from 'react-router-dom';

const LeftBar: React.FC = () => {
  return (
    <>
      <div className="leftbar-wrapper">
        <div className="new">
            <svg className="Q6yead QJZfhe " width="24" height="24" viewBox="0 0 24 24" focusable="false">
              <path d="M20 13h-7v7h-2v-7H4v-2h7V4h2v7h7v2z"></path>
            </svg>
            <span>New</span>
        </div>
        <div className="navs">
          <div className="mydrive-others">

            <Link className='link' to='/'>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                  <path d="M15.6296 10.3518L10.5185 1.46295H5.48147L10.5926 10.3518H15.6296ZM6.29628 11.0926L3.77777 15.537H13.4815L16 11.0926H6.29628ZM4.81481 2.57406L0 11.0926L2.51851 15.537L7.40739 7.01851L4.81481 2.57406Z" fill="#000"/>
                </svg>
                <span>my drive</span>
              </div>
            </Link>

            <Link className='link' to='/shared-with-me'>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.02344 3.47819C3.02344 0.84381 6.40468 -0.71869 8.3953 1.73131C6.84218 2.34381 5.46718 4.28131 6.05468 6.44694C6.0453 6.44694 6.03593 6.4485 6.02655 6.45006C6.01718 6.45162 6.0078 6.45319 5.99843 6.45319C4.35468 6.45319 3.02344 5.12194 3.02344 3.47819ZM12.9734 5.47817C12.9734 7.12122 11.6415 8.45317 9.99843 8.45317C8.35539 8.45317 7.02344 7.12122 7.02344 5.47817C7.02344 3.83513 8.35539 2.50317 9.99843 2.50317C11.6415 2.50317 12.9734 3.83513 12.9734 5.47817ZM15.9484 13.9C15.9484 17.3687 4.05469 17.3687 4.05469 13.9C4.05469 7.76873 15.9484 7.83123 15.9484 13.9ZM6.39923 7.34693C0.905481 6.5938 -2.62577 12.9688 2.53048 14.0563C2.58048 11.1282 4.80548 9.34693 7.52736 8.69068C7.05861 8.3313 6.67423 7.87505 6.39923 7.34693Z" fill="#000"/>
                </svg>
                <span>shared with me</span>
              </div>
            </Link>

            <Link className='link' to='/recent'>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6562 2.84375C12.1465 1.3313 10.1377 0.5 8 0.5C5.8623 0.5 3.85352 1.3313 2.34375 2.84375C0.831055 4.35315 0 6.36255 0 8.5C0 10.6375 0.831055 12.6469 2.34375 14.1562C3.85645 15.6687 5.8623 16.5 8 16.5C10.1377 16.5 12.1465 15.6687 13.6562 14.1562C15.1689 12.6438 16 10.6375 16 8.5C16 6.36255 15.1689 4.35315 13.6562 2.84375ZM8 14.5C4.69043 14.5 2 11.8093 2 8.5C2 5.19067 4.69043 2.5 8 2.5C11.3096 2.5 14 5.19067 14 8.5C14 11.8093 11.3096 14.5 8 14.5ZM6 11.5C5.87207 11.5 5.74316 11.45 5.64648 11.3531C5.4502 11.1594 5.4502 10.8406 5.64648 10.6469L7.14648 9.14685C7.05273 8.94995 7 8.7312 7 8.5C7 7.84692 7.41895 7.29065 8 7.08435V4C8 3.72498 8.22461 3.5 8.5 3.5C8.77441 3.5 9 3.72498 9 4V7.08435C9.58105 7.29065 10 7.84692 10 8.5C10 9.32812 9.32812 10 8.5 10C8.26855 10 8.0498 9.9469 7.85254 9.85315L6.35254 11.3531C6.25586 11.45 6.12793 11.5 6 11.5Z" fill="#000"/>
                </svg>
                <span>recent</span>
              </div>
            </Link>

            <Link className='link' to='/starred'>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7117 16.3682C12.8279 16.4372 12.9568 16.4717 13.0847 16.4717H13.0945C13.4958 16.4717 13.8191 16.1454 13.8191 15.747C13.8191 15.6247 13.7908 15.5117 13.738 15.4113L11.9089 10.2694L15.698 7.25447C15.9402 7.0631 16.031 6.73996 15.9304 6.4482C15.8298 6.15643 15.5544 5.96193 15.2468 5.96193H10.5349L8.67749 0.998779C8.57007 0.716431 8.30054 0.528198 7.99975 0.528198C7.698 0.528198 7.42847 0.716431 7.32202 0.998779L5.4646 5.96193H0.755614C0.447996 5.96193 0.175536 6.15643 0.0720199 6.4482C-0.0314957 6.73996 0.0622543 7.0631 0.300536 7.25447L4.09643 10.2725L2.35522 15.3831C2.25854 15.6717 2.34936 15.9886 2.58472 16.18C2.82007 16.3713 3.14917 16.3964 3.40991 16.2427L7.99682 13.5384L12.7117 16.3682ZM8.37378 12.0733C8.25757 12.0043 8.12866 11.9698 7.99975 11.9698C7.87182 11.9698 7.74585 12.0043 7.63257 12.0702L4.36108 13.9996L5.63745 10.2568C5.73511 9.9682 5.64038 9.64821 5.4021 9.45683L2.82983 7.41135H5.96753C6.26831 7.41135 6.53784 7.2231 6.64429 6.94075L7.99975 3.32036L9.35522 6.94075C9.45874 7.2231 9.73218 7.41135 10.033 7.41135H13.1707L10.5974 9.45683C10.3562 9.64821 10.2624 9.97447 10.366 10.2662L11.7244 14.0843L8.37378 12.0733Z" fill="#000"/>
                </svg>
                <span>starred</span>
              </div>
            </Link>

            <Link className='link' to='/bin'>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11 0.5V1.52924H14V3.50351H2V1.52924H5V0.5H11ZM2 14.2731C2 15.502 3 16.5 4.23145 16.5H11.7656C12.9971 16.5 13.9971 15.502 13.9971 14.2731V4.52339H2V14.2731ZM4 6.51949H12V13.7616C12 14.1702 11.666 14.5039 11.2559 14.5039H4.74414C4.33398 14.5039 4 14.1702 4 13.7616V6.51949ZM9 7.48636H11V13.4747H9V7.48636ZM7 7.48636H5V13.4747H7V7.48636Z" fill="#000"/>
                </svg>
                <span>trash</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default LeftBar;