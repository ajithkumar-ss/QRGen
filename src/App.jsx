import Text from "./Text"
import Qrgen from "./Qrgen"
import { useState } from "react"
import './global.css'
const App = () => {

  let [state,setState]=useState({});
  
  let onsubmit=(cred)=>{
    setState({...state,...cred});
  }

  console.log(state);

  return (
    <>
      <main className="appmain"> 
      <div className="textdiv"> <Text onsubmit={onsubmit}/> </div>
      <div className="qrdiv"> <Qrgen data={state}/> </div>
      </main>
    </>
  )
}

export default App