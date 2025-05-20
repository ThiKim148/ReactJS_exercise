import React, { useState } from "react";
import ReactDOM from 'react-dom';

function HinhCN() {
   const [diemtoan, setDiemToan] = useState(10);
   const [diemly, setDiemLy] = useState();
   const [diemTB, setDiemtb] = useState();
    console.log(diemtoan)

   const tinhDiemTB = () => {
    const tb = (Number(diemtoan) + Number(diemly)) /2;
    setDiemtb(tb);
   };
        return (
            <div>
            <form>
                <div>toan <input type='number' value={diemtoan} onChange={(e) => setDiemToan(e.target.value/2)}></input></div>
                <div>ly <input type='number' value={diemly} onChange={(e) => setDiemLy(e.target.value)}></input></div>
                <button type='button' onClick={tinhDiemTB}>Diem TB: </button>
            </form>
            <div>
                <h3>Diem tb: {diemTB}</h3>
            </div>
            </div>
        );
    }

export default HinhCN;
