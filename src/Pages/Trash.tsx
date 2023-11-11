import React from 'react';
import { Helmet } from 'react-helmet';
import TrashFile from '../components/TrashFile';

const Trash = () => {
  return (
    <>
      <Helmet>
        <title>Bin - Google Drive</title>
      </Helmet>
      <TrashFile />
    </>
  )
}

export default Trash;