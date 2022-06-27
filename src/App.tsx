import { Route, Routes } from "react-router-dom";
import PokemonProfileLayout from "./layouts/PokemonProfileLayout";
import PokemonsListLayout from "./layouts/PokemonsListLayout";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<PokemonsListLayout />}></Route>
        <Route path="/:name" element={<PokemonProfileLayout />}></Route>
      </Routes>
    </div>
  );
}

export default App;
