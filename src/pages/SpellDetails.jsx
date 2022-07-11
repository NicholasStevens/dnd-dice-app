import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function SpellDetails() {
  const [specificSpell, setSpecificSpell] = useState(null);
  const params = useParams();

  useEffect(() => {
    async function fetchSpell() {
      const response = await axios.get(
        `https://www.dnd5eapi.co/api/spells/${params.index}`
      );
      setSpecificSpell(response.data);
    }
    fetchSpell();
  }, []);

  return specificSpell ? (
    <div className="body">
      <h3>{specificSpell.name}</h3>
      <p>Casting time: {specificSpell.casting_time}</p>
      <p>Duration: {specificSpell.duration}</p>
      <p>Range: {specificSpell.range}</p>
      <p>Description: {specificSpell.desc}</p>
    </div>
  ) : (
    <p>...Loading</p>
  );
}
