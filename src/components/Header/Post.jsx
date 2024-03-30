import { SVG } from '../SVG';

const Post = () => {
  return (
    <div className='w-14 500:w-[52px] 1265:w-[90%] h-14 500:h-[52px] 500:my-1 flex items-center justify-center fixed 500:static right-5 bottom-[73px] t-rounded shadow-btn-post 500:shadow-black bg-twitter'>
      <div className='1265:hidden'>
        <SVG name={'Post'} w='24px' h='24px' />
      </div>
      <span className='hidden 1265:inline text-[17px] font-bold'>Post</span>
    </div>
  )
}

export { Post };
