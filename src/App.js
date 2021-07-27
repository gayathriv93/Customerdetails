// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Formcomp from './Form/Formcomp';
import Customertab from './Customertable/Customertab';
import Editform from './Editform/Editform';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link className="text-decoration-none p-2 ms-2 bg-secondary text-white border rounded " to="/Formcomp">CustomerDetails</Link>
          <Link className="text-decoration-none p-2  bg-secondary text-white border rounded " to="/Customertab">CustomerDB</Link>
          <Link className="text-decoration-none p-2  bg-secondary text-white border rounded " to="/Editform">Edit Details</Link>

        </nav>
        <Switch>
          <Route exact path="/Formcomp">
            <Formcomp />
          </Route>
          <Route path="/Customertab">
            <Customertab />
          </Route>
          <Route path="/Editform">
            <Editform />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
