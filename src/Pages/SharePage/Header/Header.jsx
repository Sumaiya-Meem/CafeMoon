import { Avatar, Dropdown, Navbar } from "flowbite-react";
import logo from "../../../assets/logo.png"
const Header = () => {
    return (
        <div>

    <Navbar fluid rounded className="fixed bg-black z-10 bg-opacity-30 w-[1024px] text-white">
      <Navbar.Brand href="/" className="">
      <div className="flex items-center">
        <div><img src={logo} alt="" className="w-8 h-8"/></div>
      <div className="ml-5">
      <p className="font-serif font-bold ">Cafe Moon</p>
        <p className="uppercase">Restaurant</p>
      </div>
      </div>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="text-white">
        <Navbar.Link href="/" className="text-white">
          Home
        </Navbar.Link>
        <Navbar.Link href="/menu" className="text-white">Menu</Navbar.Link>
        <Navbar.Link href="/order" className="text-white">Order</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>

        </div>
    );
};

export default Header;