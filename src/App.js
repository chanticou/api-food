import { Foods_container } from "./components/Foods_container/Foods_container";
import { NavBar } from "./components/NavBar/NabBar";
import { Route, Routes } from "react-router-dom";
import { CreateRecipe } from "./components/CreateRecipe/CreateRecipe";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Foods_container />
            </>
          }
        />
        <Route
          path="/createFood"
          element={
            <>
              <CreateRecipe />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
