import React, { use } from "react";
import { useParams } from "react-router";

const newsPromise = fetch("/news.json").then((res) => res.json());

const CategoryNews = () => {
  let params = useParams();
  const categoryId = params.id;
  const allNews = use(newsPromise);
  const selectedNews =
    categoryId === "0"
      ? allNews
      : allNews.filter((news) => Number(categoryId) === news["category_id"]);
  return <div>{selectedNews.length} News Found</div>;
};

export default CategoryNews;
