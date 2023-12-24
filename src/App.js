import './App.css';
import Convertor from './CryptoCovertor/Convertor';

function App() {
  const APIkey="3770ec5b9152404dae6a8970c48ad74d";  
  return (
    <div className="App">
     <Convertor APIkey={APIkey}/>
    </div>
  );
}

export default App;
