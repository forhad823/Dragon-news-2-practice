import React, { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(categoryPromise);

  return (
    <>
      <div className="font-bold">All Category ({categories.length})</div>
      {/* showing all categories below */}
      <div className="grid grid-cols-1 mt-5 gap-3">
        {categories.map((cat) => (
          <NavLink
            key={cat.id}
            to={`/category/${cat.id}`}
            className="btn bg-base-100 border-0 hover:bg-base-200"
          >
            {cat.name}
          </NavLink>
        ))}
      </div>
    </>
  );
};
export default Categories;
