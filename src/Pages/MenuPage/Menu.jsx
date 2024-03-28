import menuImg from "../../assets/menu/banner3.jpg"
import PopularMenu from "../HomePage/PopularMenu/PopularMenu";
import Cover from "../SharePage/Cover/Cover";

const Menu = () => {
    return (
        <div>
            <Cover img={menuImg} title={"our menu"} para={"Would you like to try a dish?"}></Cover>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;