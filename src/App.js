import './App.css';
import Button from './Button';
import useColorChange from './UseColorChange';

function App() {
  const [color,handleButtonClick] = useColorChange()
  return (
    <div className="App">
      <Button label={'按钮'} width={'100px'} onClick={handleButtonClick}>
        <span>123</span>
      </Button>
      <div style={{'color': color}}>kkkk</div>
    </div>
  );
}

export default App;
