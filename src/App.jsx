import { useState } from 'react'
import './App.css'
import Leftcol from './Leftcol'
import NumberGrid from './NumberGrid'
import RightCol from './RightCol'
import Result from './Result'
import Filter from './Filter'
import LeftBot from './LeftBot'
import UpperRow from './Upperrow'


function App() {
  return (
    <div className="fixed-white-screen">
      <div className="section-container">
        <div className="section-1">
          <div className="section-1-inner">
            <div className="part-1"><Result/></div>
            <div className="part-2">Welcome to kohinoor Game Table</div>
            <div className="part-3"><UpperRow /></div>
            <div className="part-4"> <Filter/> </div>
          </div>
        </div>
        <div className="section-2">
          <div className="section-2-inner">
            <div className="section2-part-1"><Leftcol/></div>
            <div className="section2-part-2"><NumberGrid/></div>
            <div className="section2-part-3"><RightCol /></div>
          </div>
        </div>
        <div className="section-3">
          <div className="section-3-inner">
            <div className="section3-part-1">
              <button className="advance-draw-btn">Advance Draw F9</button>
            </div>
            <div className="section3-part-2">
              <div className="section3p2-part1"> Last Transaction:<br/> #22081690601 Pt(40) </div>
              <div className="section3p2-part2"> 
                  <input type="text" placeholder="Enter Barcode" className="barcode-input" />
              </div>
              <div className="section3p2-part3"> 
                 <button className="buy-now-btn">Buy Now (F6)</button>
              </div>
            </div>
            <div className="section3-part-3">
                <button className="advance-sum-btn">0</button>
                  <button className="advance-sum-btn">0</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App


            // <div className="section3-part-2">
            //        Last Transaction :<br/> #22081690601 Pt(40)
            //    <input type="text" placeholder="Enter Barcode" className="barcode-input" style={{margin:'0 8px'}} />
            //    <button className="buy-now-btn">Buy Now (F6)</button>
            // </div>