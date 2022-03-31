import { useState } from "react";

function App() {
  //state (données)
  const [title, setTitle] = useState("Paul");
  const [fruit, setFruit] = useState("fraise");
  const [number, setNumber] = useState(0);

  //comportements
  const handleClick = ()=>{
    //alert("Je suis cliqué")
    console.log(number)
    //number = number + 1
    setNumber(number+1) 
    console.log(number)
  }

  //affichage
  return (
    <div>
      <div>{number}</div>
      <button onClick={handleClick}>Incrémente</button>
    </div>
  );
}

export default App;
