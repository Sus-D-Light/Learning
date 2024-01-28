import React, { useState } from 'react';
import HeroSection from "./components/Home/HeroSection/HeroSection.js"
// import Menu from './components/Menu/menu.js';
// import HeaderCartButton from './components/Layout/HeaderCartButton.js';
import Header from './components/Layout/Header/Header.js';
import Features from './components/Features/Features.js';
const App = ()=>{
return (<>
  <HeroSection></HeroSection>
  <Header></Header>
  <Features></Features>
  {/* <nav>
 <Menu/>
<HeaderCartButton/> 
  
  </nav> */}
</>)
}
export default App