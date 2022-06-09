import React from 'react';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./pages/home";
import About from "./pages/aboutUs";
import Service from "./pages/service";
import Contact from "./pages/contact";

export default function Rotas() {
    return(
        <>
        <Router>
            <Routes>
                <Route path= "/" exact  element={<Home />} />
                <Route path= "/quem-somos"  element={<About />} /> 
                <Route path= "/servicos"  element={<Service />} /> 
                <Route path= "/contatos"  element={<Contact />} /> 
            </Routes>
        
        </Router>

        </>
    )
} 