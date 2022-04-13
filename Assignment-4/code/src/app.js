import React from 'react';
import Postview from '../src/Postview';
import LandingPage from '../src/components/loading_page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/postview" element={<Postview />}/>
      </Routes>
    </BrowserRouter>
  );
}