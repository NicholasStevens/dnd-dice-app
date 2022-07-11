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
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/roll">Roll Dice</NavLink>
      </header>
      <Routes>
        <Route path="/roll" element={<DiceRoll />} />
        <Route path="/" element={<Spells />} />
        <Route path="/spells/:index" element={<SpellDetails />} />
      </Routes>
    </div>
  );
}

export default App;
