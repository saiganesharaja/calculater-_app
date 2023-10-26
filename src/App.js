import logo from './logo.svg';
import './App.css';

import Instgram from './components/Instagram';

function App() {

  return (
    <div>
      {/* <InputDisplay /> */}
      {<Instgram />}
    </div>



    // <center>
    //   <div>
    //     <input type='text' value={input}></input>
    //   </div>
    //   <div>
    //     <div>
    //       <button onClick={() => setinput(input + "7")}>7</button>
    //       <button onClick={() => setinput(input + "8")}>8</button>
    //       <button onClick={() => setinput(input + "9")}>9</button>
    //       <button onClick={() => setinput(input + "/")}>/</button>
    //     </div>
    //     <div>
    //       <button onClick={() => setinput(input + "4")}>4</button>
    //       <button onClick={() => setinput(input + "5")}>5</button>
    //       <button onClick={() => setinput(input + "6")}>6</button>
    //       <button onClick={() => setinput(input + "*")}>*</button>
    //     </div>
    //     <div>
    //       <button onClick={() => setinput(input + "1")}>1</button>
    //       <button onClick={() => setinput(input + "2")}>2</button>
    //       <button onClick={() => setinput(input + "3")}>3</button>
    //       <button onClick={() => setinput(input + "-")}>-</button>
    //     </div>
    //     <div>
    //       <button onClick={() => setinput(input + "0")}>0</button>
    //       <button onClick={() => setinput("")}>c</button>
    //       <button onClick={() => setinput(input + "+")}>+</button>
    //       <button onClick={() => setinput(eval(input))}>=</button>
    //     </div>
    //   </div>
    // </center>

  );
}

export default App;
