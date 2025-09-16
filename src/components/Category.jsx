import { use } from "react";
import { NavLink } from "react-router-dom";

const categoryPromise = fetch("public/categories.json").then(res => res.json())
const Category = () => {
    const categories = use(categoryPromise);

    return (
        <div>
            <h2 className='font-bold'>All Category</h2>

            <div className="grid grid-cols-1 gap-3 mt-5">
                {
                    categories.map(category => <NavLink to={`/category/${category.id}`} key={category.id} className="btn bg-base-100 border-0 hover:bg-base-300 font-semibold text-gray-500">
                        {category.name}
                    </NavLink>)
                }
            </div>
        </div>
    );
};

export default Category;