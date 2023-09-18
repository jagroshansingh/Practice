import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const SideBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let initial = searchParams.getAll("category");
  const [category, setCategory] = useState(initial || []);

  const handleFilter = (e) => {
    let newCategory = [...category];
    if (newCategory.includes(e.target.value)) {
      newCategory.splice(newCategory.indexOf(e.target.value), 1);
    } else {
      newCategory = [...newCategory, e.target.value];
    }
    setCategory(newCategory);
  };

  useEffect(() => {
    let params = {
      category,
    };
    setSearchParams(params);
  }, [category]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "start" }}
    >
      <h3>Filter By</h3>
      <label>
        <input
          type="checkbox"
          value="Novel"
          onChange={handleFilter}
          checked={category.includes("Novel")}
        />{" "}
        Novel
      </label>
      <label>
        <input
          type="checkbox"
          value="Motivational"
          onChange={handleFilter}
          checked={category.includes("Motivational")}
        />{" "}
        Motivational
      </label>
      <label>
        <input
          type="checkbox"
          value="Thriller"
          onChange={handleFilter}
          checked={category.includes("Thriller")}
        />{" "}
        Thriller
      </label>
      <label>
        <input
          type="checkbox"
          value="Science_Fiction"
          onChange={handleFilter}
          checked={category.includes("Science_Fiction")}
        />{" "}
        Science Fiction
      </label>
    </div>
  );
};
