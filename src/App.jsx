import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import { ThemeProvider } from './components/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Toaster position="bottom-right" theme="system" />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
