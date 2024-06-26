import { Parallax} from 'react-parallax';


// eslint-disable-next-line react/prop-types
const Cover = ({img,title,para}) => {
    return (
        <div className=''>
             <Parallax
        blur={{ min: -30, max: 30 }}
        bgImage={img}
        bgImageAlt="the menu"
        strength={-200}
    >
        <div className='h-[300px] text-white flex flex-col items-center mt-36 bg-slate-500 bg-opacity-20'>
            <h1 className='text-3xl uppercase'>{title}</h1>
            <h4 className='capitalize '> {para}</h4>

        </div>
       
    </Parallax>
            
        </div>
    );
};

export default Cover;