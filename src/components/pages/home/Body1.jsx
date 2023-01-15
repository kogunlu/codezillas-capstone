import { useNavigate } from "react-router-dom";
import Button from "../../shared/button/Button";

export default function Body1()
{
    const navigate = useNavigate();

    return(
        <div className="mb-60 md:mb-0 ">
            <div className='w-full'>
                <div className=" grid grid-cols-12 grid-rows-6 absolute gap-y-10">
                    <span className="col-span-12 row-span-1" />
                    <div className="grid row-span-5 col-span-5 col-start-4 md:col-start-1 ">
                        <div className="md:col-start-3">
                            <p className="uppercase text-lg md:text-4xl">We are here to</p>
                            <p className="uppercase text-7xl md:text-9xl">Help</p>
                            <br/>
                            <Button classes="py-2 px-5  hover:bg-cyan-200 bg-cyan-400 md:font-medium md:font-small rounded text-sm md:text-lg" function={()=>navigate('/book')} name="BOOK AN APPOINTMENT"/>
                        </div>
                    </div>

                    <img className='col-start-1 md:row-span-4 col-span-10 md:col-span-6' src="/home-assets/home-image1.svg" alt='home_image' />
                </div>
                <img className="w-full" alt="Background" src="/home-assets/home-bg1.png" />
            </div>
        </div>  
    )
    
}