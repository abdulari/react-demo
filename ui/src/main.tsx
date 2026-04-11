import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// react-router
import { HashRouter, Route, Routes } from "react-router";

// mantine 
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

// pages
import Home from "./page/Home.tsx"
import ZustandDemo from './page/ZustandDemo.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/zustand-demo" element={<ZustandDemo />} />
        </Routes>
      </HashRouter>
    </MantineProvider>
  </StrictMode>,
)
