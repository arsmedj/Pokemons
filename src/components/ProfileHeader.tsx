import React from "react";
import { ucFirst } from "../utils";
let pokemonLogo = require("../assets/img/pokemonLogo.jpg");
interface ProfileHeaderProps {
  name: string;
  ava: string | null;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ name, ava }) => {
  return (
    <div className="profile-header">
      <span>{ucFirst(name)}</span>
      <img src={ava || pokemonLogo} alt="pokemonAva" />
    </div>
  );
};

export default ProfileHeader;
