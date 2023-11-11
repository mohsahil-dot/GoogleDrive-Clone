import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import LeftBar from './components/LeftBar';
import Header from './components/Header';
import Shared from './Pages/Shared';
import Recent from './Pages/Recent';
import Starred from './Pages/Starred';
import Trash from './Pages/Trash';
import NotFound from './Pages/NotFound';

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
            <Route path='/shared-with-me' element={<Shared />} />
            <Route path='/recent' element={<Recent />} />
            <Route path='/starred' element={<Starred />} />
            <Route path='/bin' element={<Trash />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </section>
    </>
  )
}

export default App