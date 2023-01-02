/* eslint-disable react/destructuring-assignment */
export default function Button(props)
{
    return(
        <input 
        type={props.type}
        value={props.name}
        className={props.classes} />
    );
}