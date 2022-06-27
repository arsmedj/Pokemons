import React from "react";
import { IType } from "../types";
interface FilterProps {
  pokeName: string;
  types: IType[];
  onChangeFilterName: any;
  onChangeFilterType: any;
}

const Filter: React.FC<FilterProps> = ({
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
        {types.map((type: IType, idx: number) => (
          <option value={type.name} key={idx}>
            {type.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
