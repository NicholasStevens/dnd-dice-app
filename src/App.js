import "./App.css";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import DiceRoll from "./pages/DiceRoll";
import Spells from "./pages/Spells";
import SpellDetails from "./pages/SpellDetails";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Throw The Bones</h1>
      </header>
      <div className="nav-app">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/roll">Roll Dice</NavLink>
      </div>
      <div classNam="body">
        <Routes>
          <Route path="/roll" element={<DiceRoll />} />
          <Route path="/" element={<Spells />}>
            <Route path=":filter" element={<Spells />} />
          </Route>
          <Route path="/spells/:index" element={<SpellDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
