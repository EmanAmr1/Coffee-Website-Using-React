import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header'
import Home from './Components/Home'
import CoffeeDetails from './Components/CoffeeDetails'
import '@fortawesome/fontawesome-svg-core/styles.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import React, { Suspense } from 'react';
import FavCoffee from './Components/FavCoffee';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>


          <Route path='' element={<Home />} />
          <Route path='/CoffeeDetails/:id' element={<CoffeeDetails />} />
          <Route path='/Fav' element={<FavCoffee />} />
        </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;
