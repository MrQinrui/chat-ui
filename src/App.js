import './App.css';
import Button from './Button';
import useColorChange from './UseColorChange';

function App() {
  const [color, handleButton1Click] = useColorChange()
  const [color2,handleButton2Click] = useColorChange("#0000ff", "f0f")
  return (
    <div className="App">
    </div>
  );
}

export default App;
