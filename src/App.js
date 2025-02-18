
import './styles.css';
import Fileexplorer from './Components/Fileexplorer';
import json from "./data.json"

function App() {
  return (
    <div className="App">   
        <h3>FILE / FOLDER EXPLORER</h3>   
        <Fileexplorer list = { json }/>
    </div>
  );
}

export default App;
