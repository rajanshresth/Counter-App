import {useState} from 'react';

function App() {
  
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <div>
        <h1 className='Counter'>Simple Counter</h1>
        <p>{count}</p>
      </div>
      
      <div className='button'>
        <button onClick={() => setCount(count + 1)}>
            Increment
        </button>
        <button onClick={()=> setCount(count-1)}>
          Decrement
        </button>
        <button onClick={()=> setCount(0)}>
          Reset
        </button>
      </div>

    </div>
  );
}

export default App;
