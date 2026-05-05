import React from "react";
import NavBar from "./components/NavBar";
import FoodList from "./components/FoodList";
import Hero from "./components/Hero/Hero";

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      {/* <FoodList /> */}
    </div>
  );
};

export default App;
