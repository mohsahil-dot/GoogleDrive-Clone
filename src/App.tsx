import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './components/Header';
import LeftBar from './components/LeftBar';

const App: React.FC = () => {
  return (
    <>
    <Header />
    <section className='app'>
      <LeftBar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </section>
    </>
  )
}

export default App