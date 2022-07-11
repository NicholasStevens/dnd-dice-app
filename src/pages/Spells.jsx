import React from "react";
import { useState, useEffect } from "react";

import axios from "axios";
import SpellCard from "../components/SpellCard";

export default function Spells() {
  const [spells, setSpells] = useState(null);

  useEffect(() => {
    async function getSpells() {
      const response = await axios.get(`https://www.dnd5eapi.co/api/spells`);
      setSpells(response.data.results);
    }
    getSpells();
  }, []);
  return (
    <div>
      {spells ? (
        spells.map((spell, i) => (
          <SpellCard key={i} name={spell.name} index={spell.index} />
        ))
      ) : (
        <p>...Loading...</p>
      )}
    </div>
  );
}
