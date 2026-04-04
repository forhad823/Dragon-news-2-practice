import React, { use } from "react";

const categoryPromise = fetch("/categories.json").then((res) => res.json());
const Categories = () => {
  const categories = use(categoryPromise);
  console.log(categories);

  return <div className="font-bold">All Category ({categories.length})</div>;
};

export default Categories;
