import { Foods_container } from "./components/Foods_container/Foods_container";
import { NavBar } from "./components/NavBar/NabBar";
import { Route, Routes } from "react-router-dom";
import { CreateRecipe } from "./components/CreateRecipe/CreateRecipe";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CreateUser } from "./components/CreateUser/CreateUser";
import { Login } from "./components/Login/Login";
import { Home } from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route
          path="/recipes"
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
        <Route
          path="/itemDetail/:id_recipe"
          element={
            <>
              <ItemDetailContainer />
            </>
          }
        />
        <Route
          path="/createUser"
          element={
            <>
              <CreateUser />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Login />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
