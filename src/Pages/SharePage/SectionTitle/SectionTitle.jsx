

// eslint-disable-next-line react/prop-types
const SectionTitle = ({subHeading,heading}) => {
    return (
        <div className=" md:w-4/12 mx-auto my-8 text-center">
            <p className="text-yellow-400 mb-2">---{subHeading}---</p>
            <p className="uppercase border-y-2 text-3xl py-4 font-serif">{heading}</p>
        </div>
    );
};

export default SectionTitle;