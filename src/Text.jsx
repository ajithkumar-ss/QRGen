import React, { useState } from 'react'
import './global.css'

const Text = ({onsubmit}) => {  

    let[cred,setCred]=useState({
        url:"",color:"",size:""
    })

    let {url,color,size}=cred;

    let handleChange=(e)=>{
        let {name,value}=e.target;
        setCred({...cred,[name]:value})
    }

    let handleSubmit = (e)=>{
        e.preventDefault();
        onsubmit(cred);
    }
   
  return (
    <>
        <section className='formmain'>
            <form onSubmit={handleSubmit}>
                <div className='formdiv'>
                    <label htmlFor="">URL</label>
                    <input type="text" name='url' value={url} onChange={handleChange} />
                </div>        

                <div className='formdiv'>
                    <label htmlFor="">Color</label>
                    <input type="text" name='color' value={color} placeholder='colors in alphabet' onChange={handleChange}/>
                </div>        

                <div className='formdiv'>
                    <label htmlFor="">Size</label>
                    <input type="number" name='size' placeholder='numbers upto 300' value={size} onChange={handleChange}/>
                </div>

                <div className='formdiv'>
                    <button>Submit</button>
                </div>
            </form>
        </section>
    </>
  )
}

export default Text
