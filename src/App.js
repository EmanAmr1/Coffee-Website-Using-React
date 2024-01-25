import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header'
import Home from './Components/Home'
import '@fortawesome/fontawesome-svg-core/styles.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import React, { Suspense } from 'react';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
       
        <Routes>

          <Route  path='' element={<Header />} />


        </Routes>

        <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
