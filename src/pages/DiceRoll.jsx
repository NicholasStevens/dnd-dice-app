import React from "react";
import { useState } from "react";

export default function DiceRoll() {
  const [diceRoll, setDiceRoll] = useState(0);

  const handleClick20 = () => {
    setDiceRoll(Math.floor(Math.random() * 20 + 1));
  };
  const handleClick12 = () => {
    setDiceRoll(Math.floor(Math.random() * 12 + 1));
  };
  const handleClick10 = () => {
    setDiceRoll(Math.floor(Math.random() * 10 + 1));
  };
  const handleClick8 = () => {
    setDiceRoll(Math.floor(Math.random() * 8 + 1));
  };
  const handleClick6 = () => {
    setDiceRoll(Math.floor(Math.random() * 6 + 1));
  };

  return (
    <main className="container">
      <div className="result">{diceRoll}</div>

      <div className="dice">
        <button onClick={handleClick20} className="dice dice20">
          20 side
        </button>
        <button onClick={handleClick12} className="dice dice12">
          12 side
        </button>
        <button onClick={handleClick10} className="dice dice10">
          10 side
        </button>
        <button onClick={handleClick8} className="dice dice8">
          8 side
        </button>
        <button onClick={handleClick6} className="dice dice6">
          6 side
        </button>
      </div>
    </main>
  );
}
