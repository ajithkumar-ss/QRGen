import React, { useState } from 'react'
import QRCode from 'qrcode.react';
import './global.css'

const Qrgen = ({data}) => {
  let {count,setCount}=useState(0);

  let handleScan=()=>{
    setCount(count+1);
    console.log(count);
  }
  console.log(" Qrgen",data.url);
  return (
    <div className='qrmain'>
      <div>
            { data.url && <QRCode bgColor={data.color} size={data.size} value={data.url} onScan={handleScan}  />}
      </div>
    </div>
  )
}

export default Qrgen
