import React from "react";

const UpperRow = () => {
  return (
    <div className="upperrow-container">
      <table className="upperrow-table">
        <tbody>
          <tr>
            <td className="upperrow-box">
              <span className="upperrow-label">CT:</span>
              <span className="upperrow-value">10:35:02</span>
            </td>
            <td className="upperrow-box">
              <span className="upperrow-label">CS:</span>
              <span className="upperrow-value">10:45 am</span>
            </td>
            <td className="upperrow-box">
              <span className="upperrow-value" style={{ fontWeight: 600 }}>09:58</span>
              <span className="suffix">RT</span>
            </td>
            <td className="upperrow-box">
              <span className="upperrow-value">17080</span>
              <span className="suffix">PT</span>
            </td>
            <td className="upperrow-box green">RESULT (F1)</td>
            <td className="upperrow-box green account-box">ACCOUNT(F2)</td>
            <td className="upperrow-box green">REPRINT (F3)</td>
            <td className="upperrow-box green">CANCEL (F4)</td>
            <td className="upperrow-box green">REFRESH (F5)</td>
            <td className="upperrow-box">
              <span className="bonus-label">Global&nbsp;Bonus:</span>
              <span className="bonus-value">1000</span>
            </td>
          </tr>
        </tbody>
      </table>

      <style>{`
        .upperrow-container {
          width: 100%;
          overflow-x: auto; /* allow horizontal scroll on small screens */
          box-sizing: border-box;
        }

        .upperrow-table {
          border-collapse: separate;
          border-spacing: 4px; /* small gap between cells */
          table-layout: fixed;
          width: max-content;
          min-width: 100%;
        }

        .upperrow-box {
          background: #ffd900;
          border-radius: clamp(6px, 1vw, 12px);
          padding: clamp(2px, 0.4vw, 6px) clamp(4px, 0.8vw, 10px);
          font-weight: bold;
          font-size: clamp(10px, 1.1vw, 15px);
          color: #000;
          border: 2px solid #0e0d0d;
          text-align: center;
          vertical-align: middle;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          height: clamp(32px, 4.5vw, 42px);
        }

        .upperrow-box.green {
          background: #a6ff4d;
          border: 2px solid #101110;
        }

        .upperrow-label {
          background: #000;
          color: #fff;
          font-weight: bold;
          font-size: clamp(11px, 1vw, 14px);
          border-radius: 4px;
          padding: 1px 3px;
          margin-right: 3px;
          display: inline-block;
        }

        .upperrow-value {
          font-size: clamp(13px, 1.2vw, 18px);
          font-weight: bold;
        }

        .suffix {
          font-size: clamp(10px, 0.9vw, 14px);
          font-weight: 400;
          margin-left: 4px;
          color: #0c0c0c;
        }

        .bonus-label {
          display: inline-block;
          font-weight: bold;
        }

        .bonus-value {
          background: #fff;
          color: #000;
          padding: 2px 8px;
          border-radius: 4px;
          border: 1px solid #000;
          display: inline-block;
          min-width: 30px;
          text-align: center;
        }

        /* Desktop */
        @media (min-width: 1025px) {
          .upperrow-box {
            font-size: clamp(12px, 1vw, 16px);
          }
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .upperrow-box {
            font-size: clamp(9px, 1vw, 14px);
          }
        }

        /* Mobile - keep one line with scroll */
        @media (max-width: 767px) {
          .upperrow-box {
            font-size: clamp(8px, 2vw, 11px);
            padding: 2px 4px;
            border-width: 1px;
          }
        }

        /* Extra Small Mobile */
        @media (max-width: 480px) {
          .upperrow-box {
            font-size: clamp(7px, 2vw, 10px);
            padding: 1px 3px;
          }
        }
      `}</style>
    </div>
  );
};

export default UpperRow;
