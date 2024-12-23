import { useState } from 'react';
import "./index.css"
import Product from './product';

function App() {
  useState();
  const [count, setCount] = useState(0)

  return (
    <>
    <div><p>hello world</p>
    <button className='SA'>Click</button>
    <Product/>
    </div>
    </>
  )
}  
export default App
