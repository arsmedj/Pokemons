import React, { useEffect, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { requestPokemonProfile } from "../redux/thunk/pokemonProfile";
import { useSelector, useDispatch } from "react-redux";
import ProfileHeader from "../components/ProfileHeader";
import ProfileInfo from "../components/ProfileInfo";

const PokemonProfileLayout = () => {
  const { name } = useParams();
  const { profile, error, loading } = useSelector(
    (state) => state.pokemonProfile
  );
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(requestPokemonProfile(name));
  }, []);

  if (loading) {
    return <h1>LOADING...</h1>;
  }
  if (error) {
    console.log(error);
    return <h1>{error}</h1>;
  }
  if (profile) {
    return (
      <div className="profile-container">
        <ProfileHeader name={name} ava={profile.sprites.front_default} />
        <ProfileInfo profile={profile} />
      </div>
    );
  }
};

export default PokemonProfileLayout;
