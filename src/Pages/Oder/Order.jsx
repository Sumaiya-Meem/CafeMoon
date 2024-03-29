import Cover from "../SharePage/Cover/Cover";
import img from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../Hooks/useMenu";
import OrderCard from "./OrderCard/OrderCard";
import { useParams } from "react-router-dom";

const Order = () => {

  const categories=['salad','pizza','dessert','soup'];
  const {category}=useParams();
  const initialIndex=categories.indexOf(category);
  const [menu]=useMenu();
  const [tabIndex, setTabIndex] = useState(initialIndex);
 

  const dessert=menu.filter(item=>item.category==="dessert");
  const soup=menu.filter(item=>item.category==="soup");
  const salad=menu.filter(item=>item.category==="salad");
  const pizza=menu.filter(item=>item.category==="pizza");
  const popular=menu.filter(item=>item.category==="popular");

  return (
    <div>
      <Cover img={img} title={"ORDER NOW"} para={""}></Cover>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>SALAD</Tab>
          <Tab>PIZZA</Tab>
          <Tab>DESSERT</Tab>
          <Tab>SOUP</Tab>
          <Tab>POPULAR</Tab>
        </TabList>
        <TabPanel>
            <OrderCard items={salad}></OrderCard>
        </TabPanel>
        <TabPanel>
        <OrderCard items={pizza}></OrderCard>
        </TabPanel>
        <TabPanel>
        <OrderCard items={dessert}></OrderCard>
        </TabPanel>
        <TabPanel>
        <OrderCard items={soup}></OrderCard>
        </TabPanel>
        <TabPanel>
        <OrderCard items={popular}></OrderCard>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
