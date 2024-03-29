import FoodCard from "../FoodCard/FoodCard";

// eslint-disable-next-line react/prop-types
const OrderCard = ({items}) => {
    return (
        <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {
                // eslint-disable-next-line react/prop-types
                items.map(item => <FoodCard key={item._id} items={item}></FoodCard>)
            }
            </div>
        </div>
    );
};

export default OrderCard;