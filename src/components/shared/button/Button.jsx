/* eslint-disable react/destructuring-assignment */
import { useNavigate } from 'react-router-dom';

export default function Button(props) {
  const navigate = useNavigate();

  function handleClick() {
    if (props.function) {
      props.function();
    } else {
      navigate('/');
    }
  }
  return (
    <input
      type="button"
      value={props.name ? props.name : 'BACK TO HOME'}
      className={
        props.classList
          ? props.classList
          : 'py-2 px-5 w-10/12 md:w-8/12 lg:w-5/12 hover:bg-cyan-200 bg-cyan-400 font-medium rounded text-sm md:text-lg'
      }
      onClick={() => handleClick()}
    />
  );
}
