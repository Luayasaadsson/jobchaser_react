import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../../store/slices/filterSlice";
import styles from "./FilterByCategory.module.css";

// FilterByCategory komponenten låter användare filtrera listan baserat på kategorier.
const FilterByCategory = () => {
  const dispatch = useDispatch();  // Hook för att kunna använda Redux dispatch funktionen.
  const [selectedCategory, setSelectedCategory] = useState("ALLA");  // Lokal state för att hålla reda på vald kategori.

  // En lista med kategorier som användare kan välja mellan i dropdown-menyn.
  const categories = [
    "ALLA", "VÅRD", "IT", "HR", "EKONOMI", "BANK", "FINANS", "JURIDIK", "KONTOR",
    "LÖN", "MANAGEMENT", "SÄLJ", "MARKNAD", "REACT", "JAVASCRIPT", "VUE", "SVELTE",
    "ANGULAR", "FRONTEND", "BACKEND", "TEKNIK",
  ];

  // Hanterar ändringar i dropdown-menyn, uppdaterar vald kategori och dispatchar ett nytt sökterm till Redux.
  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newCategory = event.target.value;  // Hämtar den nya kategorin från eventet.
    setSelectedCategory(newCategory);  // Uppdaterar den lokala state med den nya kategorin.
    const searchTerm = newCategory === "ALLA" ? "" : newCategory;  // Bestämmer sökterm baserat på vald kategori.
    dispatch(setSearchTerm(searchTerm));  // Skickar den nya söktermen till Redux store.
  };

  // Renderar en dropdown-lista med kategorier för användaren att välja från.
  return (
    <div className={styles.dropdownContainer}>
      <select
        value={selectedCategory}  // Sätter det nuvarande värdet i dropdown till vald kategori.
        onChange={handleCategoryChange}  // Funktion som körs när en ny kategori väljs.
        className={styles.select}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterByCategory;