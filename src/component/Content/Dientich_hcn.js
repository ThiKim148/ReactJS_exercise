import React,{Component, useState} from "react";

function Dientich_hcn () {
    const [lenght, setLenght] = useState(0);
    const [width, setWidth] = useState(0);

    const [area, setArea] = useState(0);

    const calculateArea = () => {
        setArea(lenght*width);
    };

    return (
        <div style={{padding: '20px'}}>
            <h2>Tinh dien tich hinh chu nhat</h2>

            <div>
                <label>Chieu dai</label>
                <input 
                type="number"
                value={lenght}
                onChange={(e) => setLenght(Number(e.target.value))}></input>
            </div>

            <div>
            <label>Chieu rong</label>
                <input 
                type="number"
                value={width}
                onChange={(e) => setWidth(Number(e.target.value))}></input>
            </div>

            <button onClick={calculateArea}>Tinh dien tich</button>
            <h3>Dien tich: {area}</h3>
        </div>
    )
}

export default Dientich_hcn;

// Hook type