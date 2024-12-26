import React from "react";
import { Link } from "react-router-dom";

export default function Products({ productList }) {
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Our Products</h1>
      <ul className="flex flex-col gap-10">
        {productList.map((product) => (
          <li key={product.id} className="">
            <Link
              to={`/product/${product.id}`}
              className="gradient-border p-3"
            >
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
