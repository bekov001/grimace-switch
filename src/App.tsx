import './App.css';
import Switch from './components/Switch';
import CustomizedSwitches from './components/example';

function App() {
  const anuar = (id:number) => {
    console.log(id)
    return id
  }
  return (
    <div className="App">
      <Switch firstString='Original' secondString='TradingView' callback={anuar}></Switch>
    </div>
  );
}

export default App;
