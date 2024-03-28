
import SectionTitle from "../../SharePage/SectionTitle/SectionTitle";
import useMenu from "../../Hooks/useMenu";
import MenuCategory from "../../SharePage/MenuCategory/MenuCategory";


const PopularMenu = () => {

   const [menu]=useMenu();
   const popular=menu.filter(item=>item.category==="popular");

    return (
        <div className="mt-8">
            <SectionTitle subHeading={"Check it out"} heading={"FROM OUR MENU"}></SectionTitle>
            <MenuCategory items={popular}></MenuCategory>
        </div>
    );
};

export default PopularMenu;