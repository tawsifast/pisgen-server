import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const Category = async () => {
  const res = await fetch("https://pisgen-server.vercel.app/category.json");
  const categories = await res.json();
  console.log(categories);
  return (
    <div className="flex gap-5 my-10">
      {categories.map((category) => (
        <Link key={category.id} href={`?category=${category.name.toLowerCase()}`}><Button >{category.name}</Button></Link> 
      ))}
    </div>
  );
};

export default Category;
