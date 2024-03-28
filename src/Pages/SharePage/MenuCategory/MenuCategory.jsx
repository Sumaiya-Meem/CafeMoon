import MenuItem from "../menuItem/MenuItem";


// eslint-disable-next-line react/prop-types
const MenuCategory = ({items}) => {
    return (
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
    );
};

export default MenuCategory;