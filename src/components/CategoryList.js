import React from "react";
import { Link } from "react-router-dom";

const CategoryList = ({categories}) => {
    console.log("Categories List:", categories);

    return (
        <div className="category-list">
           <h2>Fresh Picks for you</h2>
           <ul>
            {categories.map((category, index) => (
                <li key={index}>
                    <Link to={`/category/${category}`}>{category}</Link>
                </li>
            ))}
           </ul>
        </div>
    );
};

export default CategoryList;