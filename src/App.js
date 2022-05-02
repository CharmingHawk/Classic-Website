
import Home from "./components/Home/home";
import BildHeader from "./components/BildHeader/bildheader";
import Navbar from './components/Navbar/navbar';
import SideFooter from "./components/Side-Footer/site-footer";
import SearchBar from "./components/SearchBar/searchbar";
import {Route, Routes} from "react-router-dom";
import React,{ Component } from 'react';
import Data from "./assets/Data.json"

import Wir from "./components/Über uns/us"
import HS from "./components/pages/hochschule"
import SE from "./components/pages/semester"
import PR from "./components/pages/professoren"
import SA from "./components/pages/semestereins"
import SB from "./components/pages/semesterzwei"
import PRI from "./components/pages/iibprofessoren"
import PRW from "./components/pages/wibprofessoren"
import PRD from "./components/pages/dozenten"
import APR from "./components/pages/professoren"

import Cookie from "./components/CookieBanner/Cookie";

export default function App() {
  
    return(
    <div className='App'>
      <BildHeader/>
      <Cookie/>  
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
              <Route path="/cvan1011" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/us" element={<Wir />} />
              <Route path="/hochschule" element={<HS />}/>
              <Route path="/semester" element={<SE />}/>
              <Route path="/semester/eins" element={<SA />}/>
              <Route path="/semester/zwei" element={<SB />}/>
              <Route path="/professoren" element={<PR />}/>
              <Route path="/professoren/iib" element={<PRI />}/>
              <Route path="/professoren/wib" element={<PRW />}/>
              <Route path="/dozenten" element={<PRD />}/>
              <Route path="/professoren" element={<APR />}/>
           </Routes>

           <SideFooter/>

        </div>
    );
  }

