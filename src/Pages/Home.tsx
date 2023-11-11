import React from 'react';
import { Helmet } from 'react-helmet';
import Main from '../components/Main';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>My Drive - Google Drive</title>
      </Helmet>
      <Main />
    </>
  )
}

export default Home