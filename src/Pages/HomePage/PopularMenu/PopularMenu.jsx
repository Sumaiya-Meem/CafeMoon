import { useEffect, useState } from "react";
import SectionTitle from "../../SharePage/SectionTitle/SectionTitle";
import MenuItem from "../../SharePage/menuItem/MenuItem";


const PopularMenu = () => {

    const [menu,setMenu]=useState([]);

    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularItem=data.filter(item=> item.category==="popular")
            setMenu(popularItem)
        })
    },[])

    return (
        <div className="mt-8">
            <SectionTitle subHeading={"Check it out"} heading={"FROM OUR MENU"}></SectionTitle>
            
            <div className="grid md:grid-cols-2 gap-6">
                {
                    menu.map(item=>
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