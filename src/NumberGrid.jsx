import React from "react";

const NumberGrid = ({ columns = [], rows = [] }) => {
  return (
    <div className="numbergrid-wrapper">
      <table className="numbergrid-table">
        <thead>
          <tr>
            {columns.map((col, i) => (
              <th key={`header-${i}`} className="cell header">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rIndex) => (
            <tr key={`row-${rIndex}`}>
              {columns.map((col, cIndex) => (
                <td key={`cell-${rIndex}-${cIndex}`} className="cell">
                  {row[col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <style>{`
        .numbergrid-wrapper {
          width: 100%;
          height: 100%;
          overflow-x: hidden;
        }
        .numbergrid-table {
          border-collapse: collapse;
          width: 100%;
          height: 100%;
          table-layout: fixed; /* ensures equal column widths */
        }
        .cell {
          border: 1px solid #ccc;
          border-radius: 9999px; /* capsule shape */
          background: #f0f0f0;
          padding: clamp(2px, 0.5vw, 4px) clamp(4px, 0.8vw, 8px);
          font-size: clamp(10px, 1.2vw, 14px);
          text-align: center;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .header {
          background: #ddd;
          font-weight: bold;
        }

        /* 📱 Mobile view */
        @media (max-width: 600px), (hover: none) and (pointer: coarse) {
          .cell {
            padding: clamp(1px, 0.4vw, 2px) clamp(2px, 0.6vw, 4px);
            font-size: clamp(7px, 2.5vw, 9px);
            border-radius: 35px;
          }
        }
      `}</style>
    </div>
  );
};

export default NumberGrid;
