import './App.css';
import Homepage from './App/Components/Pages/Homepage/Homepage';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Products from './App/Components/Pages/Products/Products';

function App() {
    return(
      <Router>
        <Routes>
        <Route path='/' element={<Homepage/>}>
          <Route path='/' element={<Products/>}></Route>
        </Route>
        </Routes>
      </Router>
    )

}

export default App;
