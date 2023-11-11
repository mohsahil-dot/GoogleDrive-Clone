import React from 'react';
import { Helmet } from 'react-helmet';
import SharedWithMe from '../components/SharedWithMe';

const Shared = () => {
  return (
    <>
      <Helmet>
        <title>Shared with me - Google Drive</title>
      </Helmet>
      <SharedWithMe />
    </>
  )
}

export default Shared;