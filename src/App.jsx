import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="fixed-white-screen">
      <div className="section-container">
        <div className="section-1">
          <div className="section-1-inner">
            <div className="part-1">Part 1 (40%)</div>
            <div className="part-2">Part 2 (15%)</div>
            <div className="part-3">Part 3 (25%)</div>
            <div className="part-4">Part 4 (20%)</div>
          </div>
        </div>
        <div className="section-2">Section 2 (65%)</div>
        <div className="section-3">Section 3 (15%)</div>
      </div>
    </div>
  );
}

export default App
