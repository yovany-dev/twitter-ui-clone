import { SVG } from "../../SVG";

const Item = ({ name }) => {
  return (
    <div className='flex gap-1 500:hidden'>
      <SVG name={name} w="20px" color="#71767b" />
    </div>
  )
}

export { Item };
