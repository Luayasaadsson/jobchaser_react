import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../../store/slices/filterSlice";
import styles from "./FilterByCategory.module.css";

const FilterByCategory = () => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("ALLA");

  const categories = [
    "ALLA", "VÅRD", "IT", "HR", "EKONOMI", "BANK", "FINANS", "JURIDIK", "KONTOR","LÖN", "MANAGEMENT", "SÄLJ", "MARKNAD", "REACT", "JAVASCRIPT", "VUE", "SVELTE","ANGULAR", "FRONTEND", "BACKEND", "TEKNIK",
  ];

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newCategory = event.target.value;
    setSelectedCategory(newCategory);
    const searchTerm = newCategory === "ALLA" ? "" : newCategory;
    dispatch(setSearchTerm(searchTerm));
  };

  return (
    <div className={styles.dropdownContainer}>
      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
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
