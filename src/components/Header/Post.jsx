import { SVG } from '../SVG';

const Post = () => {
  return (
    <div className='w-14 500:w-[52px] h-14 500:h-[52px] 500:my-1 flex items-center justify-center fixed 500:static right-5 bottom-[73px] t-rounded shadow-btn-post 500:shadow-black bg-twitter'>
      <SVG name={'Post'} w='24px' h='24px' />
      <span className='hidden'>Post</span>
    </div>
  )
}

export { Post };
