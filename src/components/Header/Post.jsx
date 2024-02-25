import { SVG } from '../SVG';

const Post = () => {
  return (
    <div className='w-14 h-14 flex items-center justify-center fixed right-5 bottom-[73px] t-rounded shadow-btn-post bg-twitter'>
      <SVG name={'Post'} w='24px' h='24px' />
      <span className='hidden'>Post</span>
    </div>
  )
}

export { Post };
