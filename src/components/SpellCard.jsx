import React from "react";
import { NavLink } from "react-router-dom";

export default function SpellCard({ index, name }) {
  return (
    <div className="spell-list">
      <NavLink to={`/spells/${index}`}>{name}</NavLink>
    </div>
  );
}
