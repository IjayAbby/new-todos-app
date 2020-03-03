import React ,{ useState} from 'react';
import './App.css';

const App = () => {
  const [count,setCount] = useState(0)

 
  return (
    <div>
      <h1>The current count is {count}</h1>
      <button onClick = {()=> setCount(count + 1)}>+1</button>
      <button onClick = {() => setCount(count - 1)}>-1</button>
      <button onClick = {() => setCount(0)}>reset</button>
    </div>
  )
}
export default App;



