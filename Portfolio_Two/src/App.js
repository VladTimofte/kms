import Sidebar from "./components/Sidebar";
import classes from './App.module.css'
import { Route, Routes, Navigate } from "react-router-dom";
import Home from './pages/Home'
import AboutMePage from "./pages/AboutMe";

function App() {
  return (
    <>
    <Sidebar />
    <div className={classes.appStyled}>
      <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about-me" element={<AboutMePage />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
