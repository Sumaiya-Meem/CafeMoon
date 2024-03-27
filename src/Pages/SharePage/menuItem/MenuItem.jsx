/* eslint-disable react/prop-types */


const MenuItem = ({item}) => {
    const {name,image,price,recipe}=item;
    return (
        <div className="flex space-x-3">
            <img src={image} alt="" className="w-[118px] h-[100px]" style={{borderRadius:'0 300px 200px 300px'}}/>
            <div>
                <h2 className="uppercase">{name} ------------------</h2>
                <p className="text-[14px]">{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
            
        </div>
    );
};

export default MenuItem;