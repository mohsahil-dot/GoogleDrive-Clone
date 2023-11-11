import React from 'react';
import { Helmet } from 'react-helmet';
import StarredFile from '../components/StarredFile';

const Starred = () => {
  return (
    <>
      <Helmet>
        <title>Starred - Google Drive</title>
      </Helmet>
      <StarredFile />
    </>
  )
}

export default Starred;