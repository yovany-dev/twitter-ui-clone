import { SVG } from "../SVG";

const Loading = () => {
  return (
    <div style={{overflowY: 'hidden'}} className='w-screen h-screen fixed top-0 left-0 z-40 flex items-center justify-center bg-black'>
      <SVG name={'X'} w="80px" h="80px" />
    </div>
  )
}

export { Loading };
