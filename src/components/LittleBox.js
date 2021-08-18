 import {drawTable, table} from "./Table"
 import { useState } from 'react'
 
 function LittleBox(props){
    const [value, setValue] = useState('')
    function getI(){
      return parseInt(props.id/3)
    }
  
    function getJ(){
      return props.id < 3 ? props.id : props.id%3
    }
    function handleClick(e){
      let i = getI()
      let j = getJ()
  
      drawTable(i, j)
      setValue(table[i][j])
    }
    return <button className="lilBox" onClick={handleClick}><p style={{position:"relative"}}>{value}</p></button>
  }

  export default LittleBox;