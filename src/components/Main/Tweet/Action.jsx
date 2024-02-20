import { SVG } from "../../SVG";

const Action = ({ name, value }) => {
  return (
    <div className='flex gap-1'>
      <SVG name={name} w="20px" color="#71767b" />
      <p>{value}</p>
    </div>
  )
}

export { Action };
