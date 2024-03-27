import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
const Footer = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row">
                <div className="flex-1 flex flex-col justify-center items-center p-5 bg-[#003666] text-white">
                     <h1 className="text-xl">CONTACT US</h1>
                      <p className="text-[14px] text-[#a9a8a8]">123 ABS Street, Uni 21, Bangladesh</p>
                      <p className="text-[14px] text-[#a9a8a8]">+88 123456789</p>
                      <p className="text-[14px] text-[#a9a8a8]">Mon - Fri: 08:00 - 22:00</p>
                      <p className="text-[14px] text-[#a9a8a8]">Sat - Sun: 10:00 - 23:00</p>

                </div>
                <div className="flex-1 flex flex-col justify-center items-center p-5 bg-[#00205b] text-white">
                     <h1 className="text-xl">FOLLOW US</h1>
                     <p className="text-[14px] text-[#a9a8a8]">Join us on social media</p>
                     <div className="flex gap-3 text-white mt-3 shadow-xl bg-[#00205b77] p-1">
                        <FaFacebookF></FaFacebookF>
                        <FiInstagram></FiInstagram>
                        <FaTwitter></FaTwitter>
                     </div>

                </div>
            </div>
            <div className="bg-black">
              <p className="text-center text-[14px] text-[#a9a8a8] py-2"> Copyright © CafeMoon. All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;