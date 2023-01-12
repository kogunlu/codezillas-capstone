/* eslint-disable react/destructuring-assignment */
import { useNavigate } from "react-router-dom";

export default function Button(props)
{
    const navigate = useNavigate();

    function handleClick()
    {
        if(props.function)
        {
            props.function()
        }else{
            navigate('/')
        }
    }
    return(
        <input 
        type={props.type ? props.type : "button"}
        value={props.name ? props.name : "CLICK"}
        className={props.classes ? props.classes : " py-2 px-5  hover:bg-cyan-200 bg-cyan-400 md:font-medium md:font-small rounded text-sm md:text-lg"}
        onClick={()=> handleClick()} />
    );
}