import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import axios from "axios";
import SpellCard from "../components/SpellCard";

export default function Spells() {
  const [spells, setSpells] = useState(null);
  const [filter, setFilter] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getSpells() {
      const response = await axios.get(`https://www.dnd5eapi.co/api/spells`);
      setSpells(response.data.results);
    }
    getSpells();
    if (params.filter) {
      setFilter(params.filter);
    }
  });

  const updateFilter = (e) => {
    setFilter(e.target.value);
    navigate(`/${e.target.value}`);
  };

  return (
    <div className="body">
      <h1>List of spells</h1>
      <div>
        <input type="text" value={filter} onChange={updateFilter} />
        {spells ? (
          spells
            .filter((spell) => spell.index.startsWith(filter))
            .map((spell, i) => (
              <SpellCard key={i} name={spell.name} index={spell.index} />
            ))
        ) : (
          <p>...Loading...</p>
        )}
      </div>
    </div>
  );
}
