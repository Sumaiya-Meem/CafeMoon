import { Link } from "react-router-dom";
import MenuItem from "../menuItem/MenuItem";
import Cover from "../Cover/Cover";


// eslint-disable-next-line react/prop-types
const MenuCategory = ({items,img,title}) => {
    return (
        <>
         <Cover img={img} title={title} para=""></Cover>
        <div className="grid md:grid-cols-2 gap-6">
        {
            // eslint-disable-next-line react/prop-types
            items.map(item=>
                <MenuItem  key={item._id}
                item={item}
                ></MenuItem>
                )
        }
 
        
    </div>
 <Link to={`/order/${title}`}>
 <div className="flex justify-center">
    <button className="mt-3 border-0 border-b-4 border-orange-400 font-semibold rounded-xl px-2 uppercase w-[120px] mx-auto my-3">order now</button>

    </div>
 </Link>
        </>
    );
};

export default MenuCategory;