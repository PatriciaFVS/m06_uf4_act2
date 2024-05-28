import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Boton from './boton';
import Numero from './Numero';

function App() {
  const [count, setCount] = useState(0)
  const incrementNum = () => {
    setCount(count + 1);
    console.log('El contador sha incrementat:'+ count);
  };
  const reiniciarNum = () => {
    setCount(0);
    console.log('El contador sha reiniciat');
  };

  return (
    <div>
      <Numero valor={count} />
      <Boton text="Click" onClick={incrementNum} esClick={true} />
      <Boton text="Reiniciar" onClick={reiniciarNum} esClick={false} />
    </div>
  )
}

export default App
