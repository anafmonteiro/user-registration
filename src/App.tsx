import React from 'react';
import { BrowserRouter, NavLink, Route, Router, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <header className="App-header">
        
      </header>
      <main>
      <Routes>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </main>
    </BrowserRouter>
  );
}

export default App;
