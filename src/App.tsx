import './App.css';
import LastTrades from './components/LastTrades';
import OrdersViewSwitch from './components/OrdersViewSwitch';
import Switch from './components/Switch';

function App() {
  const anuar = (id:number) => {
    console.log(id)
    return id
  }
  return (
    <div className="App">
      <LastTrades amount={10} amountDepth='1' depth='1'></LastTrades>
      <Switch firstString='Original' secondString='TradingView' callback={anuar}></Switch>
      <OrdersViewSwitch callback={anuar}></OrdersViewSwitch>
    </div>
  );
}

export default App;
