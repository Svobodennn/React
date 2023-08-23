import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

      <div id='content'></div>
        <Routes>
          <Route path='/' component={Home}></Route>
          <Route path='/signin' component={Signin}></Route>
          <Route path='/signup' component={Signup}></Route>
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}



export default App;
