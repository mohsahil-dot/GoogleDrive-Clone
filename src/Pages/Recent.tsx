import React from 'react';
import { Helmet } from 'react-helmet';
import RecentFile from '../components/RecentFile';

const Recent = () => {
  return (
    <>
      <Helmet>
        <title>Recent - Google Drive</title>
      </Helmet>
      <RecentFile />
    </>
  )
}

export default Recent;