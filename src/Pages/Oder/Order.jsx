import Cover from "../SharePage/Cover/Cover";
import img from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../Hooks/useMenu";
import FoodCard from "./FoodCard/FoodCard";

const Order = () => {
  const [menu]=useMenu();
  const [tabIndex, setTabIndex] = useState(0);

  const dessert=menu.filter(item=>item.category==="dessert");
  const soup=menu.filter(item=>item.category==="soup");
  const salad=menu.filter(item=>item.category==="salad");
  const pizza=menu.filter(item=>item.category==="pizza");

  return (
    <div>
      <Cover img={img} title={"ORDER NOW"} para={""}></Cover>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>SALAD</Tab>
          <Tab>PIZZA</Tab>
          <Tab>DESSERT</Tab>
          <Tab>SOUP</Tab>
        </TabList>
        <TabPanel>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {
                salad.map(item => <FoodCard key={item._id} items={item}></FoodCard>)
            }
            </div>
        </TabPanel>
        <TabPanel>
        {
                pizza.map(item => <FoodCard key={item._id} items={item}></FoodCard>)
            }
        </TabPanel>
        <TabPanel>
        {
                dessert.map(item => <FoodCard key={item._id} items={item}></FoodCard>)
            }
        </TabPanel>
        <TabPanel>
        {
                soup.map(item => <FoodCard key={item._id} items={item}></FoodCard>)
            }
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
