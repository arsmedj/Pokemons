import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { connect } from "react-redux";
import { requestPokemonProfile } from "../redux/thunk/pokemonProfile";
import ProfileHeader from "../components/ProfileHeader";
import ProfileInfo from "../components/ProfileInfo";
import { RootState } from "../redux/store";

interface PokemonProfileLayoutProps {
  requestPokemonProfile: (name: string) => void;
}

const PokemonProfileLayout: React.FC<PokemonProfileLayoutProps> = ({
  requestPokemonProfile,
}) => {
  const { name } = useParams();
  const { profile, error, loading } = useTypedSelector(
    (state) => state.pokemonProfile
  );

  useEffect(() => {
    requestPokemonProfile(name!);
  }, [name, requestPokemonProfile]);

  if (loading) {
    return <h1>LOADING...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  if (profile) {
    return (
      <div className="profile-container">
        <ProfileHeader name={name!} ava={profile.sprites.front_default} />
        <ProfileInfo profile={profile} />
      </div>
    );
  }
  return <></>;
};
const mapStateToProps = (state: RootState) => ({});
export default connect(mapStateToProps, { requestPokemonProfile })(
  PokemonProfileLayout
);
