import React from "react";

const UpperRow = () => {
  return (
    <div className="upperrow-wrapper">
      <div className="upperrow-mobile">
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
      </div>

      <style>{`
        .upperrow-wrapper {
          width: 100%;
        }

        .upperrow-table {
          border-collapse: separate;
          border-spacing: 6px;
          table-layout: auto;
          width: 100%;
        }

        .upperrow-box {
          background: #ffd900;
          border-radius: 12px;
          padding: 4px 8px;
          font-weight: bold;
          font-size: clamp(9px, 1.1vw, 15px);
          color: #000;
          border: 2px solid #0e0d0d;
          text-align: center;
          vertical-align: middle;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .upperrow-box.green {
          background: #a6ff4d;
          border: 2px solid #101110;
        }

        .upperrow-label {
          background: #000;
          color: #fff;
          font-weight: bold;
          font-size: clamp(9px, 1vw, 14px);
          border-radius: 4px;
          padding: 1px 3px;
          margin-right: 3px;
          display: inline-block;
        }

        .upperrow-value {
          font-size: clamp(10px, 1.2vw, 18px);
          font-weight: bold;
        }

        .suffix {
          font-size: clamp(9px, 0.9vw, 14px);
          font-weight: 400;
          margin-left: 4px;
          color: #0c0c0c;
        }

        .bonus-label {
          display: inline-block;
          font-weight: bold;
          margin-right: 4px;
        }

        .bonus-value {
          background: #fff;
          color: #000;
          padding: 2px 8px;
          border-radius: 6px;
          border: 1px solid #000;
          display: inline-block;
          min-width: 32px;
          text-align: center;
          white-space: nowrap;
        }

        /* ✅ Desktop stays the same */
        @media (min-width: 768px) {
          .upperrow-wrapper {
            margin: 0;
          }
        }

        /* 📱 Mobile - new flex-driven layout */
        @media (max-width: 767px) {
          .upperrow-mobile {
            display: flex;
            align-items: center;         /* vertically center */
            min-height: 60px;             /* ensures visible rounded corners */
            padding-top: 4px;             /* small gap top */
            padding-bottom: 4px;          /* small gap bottom */
            background-color: transparent;
            overflow-x: auto;             /* scroll if needed */
          }

          .upperrow-table {
            width: max-content;           /* don't squish content */
          }

          .upperrow-box {
            min-width: max-content;        /* no text clipping */
            font-size: clamp(8px, 2.2vw, 12px);
            padding: 3px 6px;
            border-radius: 10px;
            height: 100%;
          }

          .bonus-value {
            min-width: max-content;
            font-size: clamp(8px, 2.2vw, 12px);
            padding: 2px 6px;
          }
        }

        /* 📱 Very small mobile */
        @media (max-width: 480px) {
          .upperrow-mobile {
            min-height: 65px; /* Slightly more for tiny screens */
          }
          .upperrow-box {
            font-size: clamp(7px, 2vw, 10px);
            padding: 2px 5px;
          }
          .bonus-value {
            font-size: clamp(7px, 2vw, 10px);
            padding: 1px 5px;
          }
        }
      `}</style>
    </div>
  );
};

export default UpperRow;
