import './App.css';
import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";

//pages
import Home from './pages/Dashboard/Home';
import Users from './pages/Dashboard/Users';
import Contact from './pages/Dashboard/Contact';
import Menu from './components/Menu';
import UserDetail from './pages/Dashboard/UserDetail';
import Login from './pages/Auth/Login';
import DashboardLayout from './layouts/Dashboard';
import AuthLayout from './layouts/Auth';
import Register from './pages/Auth/Register';
import Error404 from './pages/Error404';

function App() {
  return (
    <BrowserRouter>
      {/* <Menu/> */}
      <Routes>
        <Route path='/' element={<DashboardLayout />}>
          <Route index element={<Home />} />
          <Route path='users' element={<Users />} />
          <Route path='users/:id' element={<UserDetail />} />
          <Route path='contact' element={<Contact />} />
        </Route>
        <Route  path='auth' element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path='register' element={<Register/>} />
        </Route>
        <Route path='*' element={<Error404/>}/> {/* not found */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
