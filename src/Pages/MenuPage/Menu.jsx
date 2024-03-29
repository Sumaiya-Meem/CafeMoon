import menuImg from "../../assets/menu/banner3.jpg"
import dessertImg from "../../assets/menu/dessert-bg.jpeg"
import soupImg from "../../assets/menu/soup-bg.jpg"
import saladImg from "../../assets/menu/salad-bg.jpg"
import PopularMenu from "../HomePage/PopularMenu/PopularMenu";
import useMenu from "../Hooks/useMenu";
import Cover from "../SharePage/Cover/Cover";
import MenuCategory from "../SharePage/MenuCategory/MenuCategory";

const Menu = () => {
    const [menu]=useMenu();
   const dessert=menu.filter(item=>item.category==="dessert");
   const soup=menu.filter(item=>item.category==="soup");
   const salad=menu.filter(item=>item.category==="salad");

    return (
        <div>
            <Cover img={menuImg} title={"our menu"} para={"Would you like to try a dish?"}></Cover>
            <PopularMenu></PopularMenu>
            <MenuCategory items={dessert} title={"dessert"} img={dessertImg} ></MenuCategory>  
            <MenuCategory items={soup} title={"soup"} img={soupImg} ></MenuCategory>
            <MenuCategory items={salad} img={saladImg} title={"salad"}></MenuCategory>

        </div>
    );
};

export default Menu;