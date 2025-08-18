import React from "react";

const NumberGrid = () => {
  const columns = ['B0', 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const blocks = Array.from({ length: 10 }, (_, i) => `F${i}`);
  const numbers = [];
  for (let i = 0; i < 10; i++) {
    const row = [];
    for (let j = 0; j < 10; j++) {
      row.push(1000 + i * 10 + j);
    }
    numbers.push(row);
  }

  return (
    <div className="numbergrid-wrapper">
      <div className="numbergrid-flex">
        <table className="numbergrid-table">
          <thead>
            <tr>
              <th className="header">BLOCK</th>
              {columns.map((col) => (
                <th key={col} className="header">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {blocks.map((block, rowIdx) => (
              <tr key={block}>
                <td className="cell">
                  <div className="cell-content">
                    <div className="num-text">{block}</div>
                    <div className="capsule"></div>
                  </div>
                </td>
                {numbers[rowIdx].map((num) => (
                  <td key={num} className="cell">
                    <div className="cell-content">
                      <div className="num-text">{num}</div>
                      <div className="capsule"></div>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <style>{`
        .numbergrid-wrapper {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: stretch;
          justify-content: center;
        }
        .numbergrid-flex {
          flex: 1;
          display: flex;
          flex-shrink: 1;
          overflow: hidden;
        }
        .numbergrid-table {
          border-collapse: collapse;
          width: 100%;
          height: 100%;
          table-layout: fixed;
        }
        .header {
          background: #ddd;
          font-weight: bold;
          text-align: center;
          color: #000;
          font-size: min(1.1vw, 13px);
          white-space: nowrap;
          padding: 0;
        }
        .cell {
          border: 1px solid #ccc;
          background: #f0f0f0;
          padding: 0;
          font-size: min(1vw, 11px);
          text-align: center;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .cell-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1px; /* tighter spacing between text and capsule */
        }
        .num-text {
          font-weight: 900;
          margin: 0;
          line-height: 1;
          font-size: min(1vw, 10px);
          color: #000;
        }
        .capsule {
          border-radius: 999px;
          border: 1px solid #6a1b9a;
          background-color: transparent;
          width: 70%; /* increased width for all screens */
          height: calc(1.2em);
          max-height: none;
        }
        @media (min-width: 1025px) {
          .capsule {
            height: calc(1.8em); /* strictly larger height for desktop */
          }
        }
        @media (max-width: 1024px) {
          .header {
            font-size: min(1.5vw, 12px);
          }
          .cell {
            font-size: min(1.2vw, 10px);
          }
          .num-text {
            font-size: min(1.1vw, 9px);
          }
          .capsule {
            width: 70%;
            height: calc(1.3em);
          }
        }
        @media (max-width: 768px) {
          .numbergrid-wrapper {
            padding: 0 !important;
          }
          .header {
            font-size: min(2.5vw, 10px) !important;
          }
          .cell {
            font-size: min(2vw, 9px) !important;
          }
          .num-text {
            font-weight: 700 !important;
            font-size: min(1.8vw, 8px) !important;
          }
          .capsule {
            width: 70% !important;
            height: calc(1.2em) !important;
          }
        }
        @media (max-width: 480px) {
          .header {
            font-size: min(3vw, 9px) !important;
          }
          .cell {
            font-size: min(2.5vw, 8px) !important;
          }
          .num-text {
            font-size: min(2vw, 7px) !important;
          }
          .capsule {
            width: 70% !important;
            height: calc(1em) !important;
          }
        }
      `}</style>
    </div>
  );
};

export default NumberGrid;
