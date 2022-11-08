import logo from './logo.svg';
import './css/sb-admin-2.css';
import './App.css'
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Dashboard from './Dashboard';
import Users from './Users';
import Products from './Products';
import CreateUsers from './CreateUsers';
import Login from './Login';
import Portal from './Portal';
import Userview from './Userview';
import EditUsers from './EditUsers';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (
    <BrowserRouter>

    <Routes>
    <Route path="/" element={<Login />}/>
    <Route path="/portal" element={<Portal />}>
    <Route path="dashboard" element={<Dashboard />}/>
    <Route path="Users" element={<Users />}/>
    <Route path="Users/:id" element={<Userview />}/>
    <Route path="User/edit/:id" element={<EditUsers />}/>
    <Route path="Create-users" element={<CreateUsers />}/>
    <Route path="Products" element={<Products />}/>
    </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
