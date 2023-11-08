import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import LeftBar from './components/LeftBar';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <>
    <section className='app'>
      <LeftBar />
      <div className="right-bar">
        <Header />
        <div className="mains">
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </div>
    </section>
    </>
  )
}

export default App