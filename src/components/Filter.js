import React from "react";

const Filter = ({
  pokeName,
  types,
  onChangeFilterName,
  onChangeFilterType,
}) => {
  return (
    <div className="filter-block">
      <input
        type="text"
        value={pokeName}
        onChange={onChangeFilterName}
        placeholder="Enter pokemon name"
      />
      <select className="pokemon-type" onChange={onChangeFilterType}>
        <option>Choose type of pokemon</option>
        {types.map((type, idx) => (
          <option value={type.name} key={idx}>
            {type.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
