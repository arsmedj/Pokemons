import React from "react";
import { ucFirst } from "../utils";
import pokemonLogo from "../assets/img/pokemonLogo.jpg";
const ProfileHeader = ({ name, ava }) => {
  return (
    <div className="profile-header">
      <span>{ucFirst(name)}</span>
      <img src={ava || pokemonLogo} />
    </div>
  );
};

export default ProfileHeader;
