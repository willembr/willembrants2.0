import { BrowserRouter } from 'react-router-dom'; 
import './App.css';
import Menu from './containers/Main/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu/>
      </BrowserRouter>
    </div>
  );
}

export default App;
