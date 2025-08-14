import React from "react";

function LeftBot() {
    return (
        <>
            <style>{`
        .qty-wrapper {
          display: flex;
          flex: 1;
          width: 100%;
          height: 100%;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          box-sizing: border-box;
          padding: 0.1rem;
        }

        .qty-table {
          display: flex;
          flex-direction: row;
          width: 100%;
          height: 100%;
          gap: clamp(4px, 0.6vw, 12px);
        }

        .qty-col {
          display: flex;
          flex-direction: column;
          flex: 1;
          height: 100%;
          gap: clamp(4px, 0.6vw, 12px);
        }

        /* Header takes same height as NumberGrid header */
        .qty-header {
          background-color: #1a2d5a;
          color: #fff;
          font-weight: bold;
          font-size: clamp(9px, 1vw, 14px);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-items: center;
          flex: 0 0 1fr; /* fixed ratio */
          height: clamp(20px, 3.2vh, 34px);
        }

        /* Each row fills remaining space equally */
        .qty-rows-wrapper {
          display: flex;
          flex-direction: column;
          flex: 1; /* take all remaining height after header */
          gap: clamp(4px, 0.6vw, 12px);
        }

        .qty-row {
          background-color: #f7e9b1;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: clamp(8px, 0.9vw, 13px);
          font-weight: bold;
          color: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1; /* each row equal height */
        }

        /* Mobile landscape adjustments */
        @media (max-width: 599px) {
          .qty-table {
            gap: 4px;
          }
          .qty-col {
            gap: 4px;
          }
          .qty-rows-wrapper {
            gap: 4px;
          }
        }
      `}</style>
           <div className="qty-wrapper">
        <div className="qty-table">
          {/* Quantity column */}
          <div className="qty-col">
            <div className="qty-header">0</div>
          </div>

          {/* Amount column */}
          <div className="qty-col">
            <div className="qty-header">0</div>
          </div>
        </div>
      </div>
        </>


    );
}

export default LeftBot;




// import React from "react";

// const Filter = () => {
//   return (
//     <div className="filter-container">
//       {[{ label: 'All', bg: 'black' }, { label: '10-19', bg: 'blue' }, { label: '30-39', bg: 'green' }, { label: '50-59', bg: 'red' }]
//         .map((btn, i) => (
//           <div key={i} className="filter-cell">
//             <input type="checkbox" className="filter-checkbox" />
//             <button
//               className={`filter-box ${['All', '10-19', '30-39', '50-59'].includes(btn.label) ? 'extra-padding' : ''}`}
//               style={{ backgroundColor: btn.bg }}
//             >
//               {btn.label}
//             </button>
//           </div>
//         ))}

//       {['EVEN', 'ODD', 'CP', 'FP'].map((txt, i) => (
//         <div key={i} className="filter-cell small">
//           <input type="checkbox" className="filter-checkbox" />
//           <span className="filter-text special">{txt}</span>
//         </div>
//       ))}

//       {/* Language dropdown styled like a button */}
//       <div className="filter-cell">
//         <select className="filter-box select-like-button" style={{ backgroundColor: 'blue', color: 'white' }}>
//           <option value="" disabled selected>Language</option>
//           <option value="en">English</option>
//           <option value="hi">Hindi</option>
//           <option value="mr">Marathi</option>
//         </select>
//       </div>

//       {[{ label: '3D Game', bg: 'red' }, { label: 'Password', bg: 'black' }, { label: 'Logout', bg: 'black' }, { label: 'Statement', bg: 'red', bold: true }]
//         .map((btn, i) => (
//           <div key={i} className="filter-cell">
//             <button className="filter-box" style={{ backgroundColor: btn.bg, fontWeight: btn.bold ? 'bold' : 'normal' }}>{btn.label}</button>
//           </div>
//         ))}

//       <style>{`
//         .filter-container {
//           display: flex;
//           flex-direction: row;
//           align-items: center;
//           justify-content: flex-start;
//           gap: 2px;
//           width: 100%;
//           height: 100%;
//           box-sizing: border-box;
//           flex-wrap: nowrap;
//           overflow-x: auto;
//         }
//         .filter-cell {
//           flex: 2;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 1px;
//           height: 100%;
//           box-sizing: border-box;
//           min-width: 0;
//         }
//         .filter-cell.small { flex: 1; }

//         .filter-box {
//           flex: 1;
//           padding: 2px 4px;
//           font-size: 14px; /* Desktop */
//           border-radius: 0px;
//           color: white;
//           line-height: 1;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           height: 60%; /* desktop reduced height */
//           box-sizing: border-box;
//           white-space: nowrap;
//           overflow: hidden;
//           text-overflow: ellipsis;
//           border: none;
//         }
//         .select-like-button { appearance: none; -webkit-appearance: none; -moz-appearance: none; cursor: pointer; }

//         .filter-checkbox { width: 20px; height: 12px; margin-right: 0; }

//         .filter-text { color: black; font-size: 13px; text-align: center; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
//         .filter-text.special { font-size: 15px; font-weight: bold; }

//         /* ✅ Mobile-first hardening: use a stricter breakpoint and touch heuristic */
//         @media (max-width: 699px), (hover: none) and (pointer: coarse) and (orientation: portrait) {
//           .filter-container { flex-wrap: nowrap !important; justify-content: space-between !important; overflow-x: hidden !important; }
//           .filter-cell { flex: 0 1 auto !important; min-width: clamp(30px, 7vw, 42px) !important; gap: 0 !important; }
//           .filter-box, select.filter-box { font-size: clamp(7.5px, 2vw, .5px) !important; height: auto !important; padding: 0 2px !important; }
//           .filter-box.extra-padding { padding: 0 3px !important; }
//           .filter-checkbox { width: 10px !important; height: 8px !important; }
//           .filter-text { font-size: clamp(6.5px, 1.7vw, 8.5px) !important; }
//           .filter-text.special { font-size: clamp(7px, 1.9vw, 9px) !important; }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Filter;
