import './App.css';
import LittleBox from './components/LittleBox'

function Squares(){
  let squares = [];
  for(var i=0; i<9; i++){
    squares.push(<LittleBox id={i}></LittleBox>)
  }
  
  return squares
}

function App() {

  return (
    <div className="App">
     <div className="box">
       <div style={{width:"157px", height:"150px", margin:"20px auto 0 auto"}}><Squares></Squares></div>
     </div>
    </div>
  );
}

export default App;
