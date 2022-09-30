import './App.css';
import { Route, Switch } from 'react-router-dom';
import ProfilePage from './components/ProfilePage';
import Dashboard from './components/Dashboard/Dashboard';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <ToastContainer/>
    <Switch>
      <Route exact path='/' component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
