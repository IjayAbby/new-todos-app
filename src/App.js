import React ,{ useState} from 'react';
import './App.css';

const App = () => {
  const [count,setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <h1>The current count is {count}</h1>
      <button onClick = {increment}>+1</button>
    </div>
  )
}
export default App;



