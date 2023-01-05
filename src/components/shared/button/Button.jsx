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
        type={props.type}
        value={props.name}
        className={props.classes}
        onClick={()=> handleClick()} />
    );
}