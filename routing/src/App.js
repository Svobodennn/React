import './App.css';
import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";

//pages
import Home from './pages/Home';
import Users from './pages/Users';
import Contact from './pages/Contact';
import Menu from './components/Menu';
import UserDetail from './components/UserDetail';
import Login from './pages/Login';
import DashboardLayout from './layouts/DashboardLayout';
import AuthLayout from './layouts/AuthLayout';

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
