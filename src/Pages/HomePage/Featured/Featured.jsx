import SectionTitle from "../../SharePage/SectionTitle/SectionTitle";
import img from "../../../assets/home/featured.jpg"
import './Feature.css'
const Featured = () => {
    return (
        <div className="feature-item bg-fixed py-2 mt-10 text-white">
            <SectionTitle subHeading={"Check it out"} heading={"Featured Item"}></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-40">
                <div>
                    <img src={img} alt="" className="rounded-lg"/>
                </div>
                <div className="md:ml-12 text-white">
                    <p>March 20, 2023</p>
                    <p>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="mt-3 border-0 border-b-4 rounded-xl px-2">READ MORE</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;