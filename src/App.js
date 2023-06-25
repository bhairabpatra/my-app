import { useState } from "react";
import "./App.css";
import Nav from "./layout/Nav";
import User from "./components/User";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Termscondition from "./pages/Terms&condition";
import Service from "./pages/Service";
import Pagenotfound from "./pages/Pagenotfound";
import Login from "./credential/Login";
 
function App() {
  const [title, setTitle] = useState("Logo");

  return (
    <Router>
      <div className="App">
        <Nav link={title} />
        <Routes>
          <Route path="/" exact  element={<User />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Service />} />
          <Route path="terms-conditio" element={<Termscondition />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="/*" component={<Pagenotfound/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
