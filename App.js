import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ProtectedRoute from './ProtectedRoute';
import Login from "./pages/Login/Login";
import Logout from "./pages/Login/Logout";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from "react-router-dom";
import DashboardClient from "./pages/Dashboard/Client/DashboardClient";
import Dashboard from "./pages/Dashboard/Admin/Dashboard";
import Ordindex from "./pages/Ordres/Orindex";
import Prindex from "./pages/Produit/Prindex";
import Catindex from "./pages/Cat/Catindex";




function App() {

  return (
      <Router>
        <Switch>
          <Route exact path="/"><Login /></Route>
          <ProtectedRoute path="/Dashboard" component={Dashboard}  />
          <ProtectedRoute path="/Ordres" component={Ordindex}  />
          <ProtectedRoute path="/Produit" component={Prindex}  />
          <ProtectedRoute path="/categorie" component={Catindex}  />
          <Route path="/Logout" component={Logout}  />


        </Switch>
      </Router>
  );
}

export default App;
