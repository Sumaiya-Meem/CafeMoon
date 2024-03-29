/* eslint-disable react/prop-types */
import { Card } from "flowbite-react";

const FoodCard = ({items}) => {
    const {name,image,price,recipe}=items;

    return (

    <Card
      className="max-w-sm h-[450px] relative"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={image}
    >
    <div>
      <p className="absolute top-2 right-4  bg-gray-900 text-orange-400 w-[50px] p-1 rounded shadow-sm shadow-orange-400">${price}</p>
      <h5 className="text-xl font-bold  text-gray-900">
        {name}
      </h5>
      <p className=" text-gray-700">
        {recipe}
      </p>
      <div className="flex justify-center mt-2">
      <button className="bg-gray-900 text-orange-400 py-2 w-[100px] rounded-md shadow-sm shadow-orange-400">Add to Cart</button>
      </div>
      </div>
    </Card>
  
    );
};

export default FoodCard;