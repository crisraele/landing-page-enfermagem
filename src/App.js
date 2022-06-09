
import React from 'react';
import Home from "./pages/home";
import About from "./pages/aboutUs";
import Service from "./pages/service";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import Testemonials from "./pages/testemonials";

function App() {
  return (
    <>
    <Home id='home-section'/>
    <Service id='service-section'/>
    <About id='about-section' />
    <Blog id='contato-section'/>
    <Testemonials id='contato-section'/>
    <Contact id='contato-section'/>
    </>
  );
}

export default App;
