/* eslint-disable no-unused-expressions */
/* eslint-disable react/destructuring-assignment */
export default function Select(props)
{
    const {options,defaultVal} = props;
    function handleSelect(e)
    {
        props.func ? props.func(e.target.selectedOptions[0].value,undefined) : ''
        props.selected ? props.selected(e.target.selectedOptions[0].value) : ''
          
    }
    return(
        <select 
        className={props.AllClassess}
        onChange={(e) => handleSelect(e)   }
        >
            <option selected="selected">{defaultVal}</option>
            {options?.map(element => {
                return <option key={element?.country_name} value={element?.country_name || element?.state_name}>{element?.country_name || element?.state_name}</option>
            })}
        </select>
    )
}