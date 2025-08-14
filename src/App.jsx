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
            <div className="part-2">Part 2 (12%)</div>
            <div className="part-3">Part 3 (27%)</div>
            <div className="part-4">Part 4 (26%)</div>
          </div>
        </div>
        <div className="section-2">
          <div className="section-2-inner">
            <div className="section2-part-1">Section 2 - Part 1 (15%)</div>
            <div className="section2-part-2">Section 2 - Part 2 (70%)</div>
            <div className="section2-part-3">Section 2 - Part 3 (15%)</div>
          </div>
        </div>
        <div className="section-3">
          <div className="section-3-inner">
            <div className="section3-part-1">Section 3 - Part 1 (15%)</div>
            <div className="section3-part-2">Section 3 - Part 2 (70%)</div>
            <div className="section3-part-3">Section 3 - Part 3 (15%)</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
