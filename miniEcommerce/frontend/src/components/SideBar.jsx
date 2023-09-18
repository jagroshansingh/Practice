import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const SideBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let initialCategory = searchParams.getAll("category");
  let initialOrder = searchParams.get("order");
  const [category, setCategory] = useState(initialCategory || []);
  const [order, setOrder] = useState(initialOrder || "");

  const handleFilter = (e) => {
    let newCategory = [...category];
    if (newCategory.includes(e.target.value)) {
      newCategory.splice(newCategory.indexOf(e.target.value), 1);
    } else {
      newCategory = [...newCategory, e.target.value];
    }
    setCategory(newCategory);
  };

  const handleSort = (e) => {
    setOrder(e.target.value);
  };

  useEffect(() => {
    let params = {
      category,
    };
    if (order) params.order = order;
    setSearchParams(params);
  }, [category, order]);

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

      <h3>Order</h3>
      <div onChange={handleSort}>
        <label>
          <input
            type="radio"
            name="sort"
            id=""
            value={"asc"}
            defaultChecked={order && order == "asc"}
          />
          Ascending
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            id=""
            value={"desc"}
            defaultChecked={order && order == "desc"}
          />
          Descending
        </label>
      </div>
    </div>
  );
};
