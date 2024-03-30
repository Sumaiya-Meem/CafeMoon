/* eslint-disable react/prop-types */
import { Card } from "flowbite-react";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const FoodCard = ({items}) => {
    const {name,image,price,recipe,_id}=items;
    const {user}=useAuth();
    const location=useLocation();
    const navigate=useNavigate();
    const axiosPublic = useAxiosPublic();

    // Add Cart 
    const handleAddToCart =(food)=>{
      console.log(food)
      if(user && user.email){
        const cartItem={
          menuId:_id,
          email:user.email,
          name,price,image
        }
        axiosPublic.post('/carts',cartItem)
        .then(res=> {
          if(res.data.insertedId){
             toast.success("Add to Cart");
          }
         }) 
      }
      else{
        Swal.fire({
          title: "You are not Logged In",
          text: "Please login to add to the cart?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, login!"
      }).then((result) => {
          if (result.isConfirmed) {
              navigate('/login', { state: { from: location } })
          }
      });
      }

    }

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
          <button 
          onClick={()=>handleAddToCart(items)}
          className="bg-gray-900 text-orange-400 py-2 w-[100px] rounded-md shadow-sm shadow-orange-400">Add to Cart</button>
      </div>
      </div>
    </Card>
  
    );
};

export default FoodCard;