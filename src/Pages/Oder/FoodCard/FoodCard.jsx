/* eslint-disable react/prop-types */
import { Card } from "flowbite-react";

const FoodCard = ({items}) => {
    const {name,image,price,recipe}=items;

    return (
        <div>
    <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={image}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {name}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {recipe}
      </p>
      <button>Add to Cart</button>
    </Card>
  

        </div>
    );
};

export default FoodCard;