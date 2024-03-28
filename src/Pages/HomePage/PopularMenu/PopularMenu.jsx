
import SectionTitle from "../../SharePage/SectionTitle/SectionTitle";
import MenuItem from "../../SharePage/menuItem/MenuItem";
import useMenu from "../../Hooks/useMenu";


const PopularMenu = () => {

   const [menu]=useMenu();
   const popular=menu.filter(item=>item.category==="popular");

    return (
        <div className="mt-8">
            <SectionTitle subHeading={"Check it out"} heading={"FROM OUR MENU"}></SectionTitle>
            
            <div className="grid md:grid-cols-2 gap-6">
                {
                    popular.map(item=>
                        <MenuItem  key={item._id}
                        item={item}
                        ></MenuItem>
                        )
                }
            </div>
        </div>
    );
};

export default PopularMenu;