import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer";

import Admin from "./admin/Admin";
import FoodList from "./components/FoodList";
import FoodCateogory from "./components/FoodCateogory";
import PromotionalBanner from "./components/PromotionalBanner";
import RestaurantList from "./components/RestaurantList";
import Restaurants from "./components/Restaurants";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("dinner");
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <FoodList setSelectedCategory={setSelectedCategory} />
              <FoodCateogory selectedCategory={selectedCategory} />
              <PromotionalBanner />
              <RestaurantList/>
              <Footer />
            </>
          }
        />
        <Route path="/admin" element={<Admin />} />
        <Route path="/restaurants" element={<Restaurants />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
