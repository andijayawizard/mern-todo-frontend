import React from 'react'
import './App.css'

function Utang() {
  const utang = [
    {id: 1, nama: "anton", jumlah_utang: "50000",},
    {id: 2, nama: "budi", jumlah_utang: "80000",},
    {id: 3, nama: "cepot", jumlah_utang: "100000",},
  ];
  const listUtang = utang.map((itemUtang) => (
    <div key={itemUtang.id} className="Item">
      <div className="User">
        <h3>{itemUtang.nama}</h3>
        <p>{itemUtang.jumlah_utang}</p>
      </div>
    </div>
  ));
  return (
    <div className="UtangBox">
      <h2>List utang teman2 kita</h2>
      {listUtang}
    </div>
  );
}

export default Utang;