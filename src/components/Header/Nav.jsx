import { Li } from './Li';
import { useResize } from '../../hooks/useResize/useResize';

const Nav = () => {
  const resize = useResize(500);

  const svgs = ['Home', 'Explore', 'Notifications', 'Messages'];
  if (resize) {
    svgs.push('List', 'X', 'Profile', 'More');
  }

  return (
    <div className='500:w-full h-full 500:h-auto 500:mt-0.5 500:mb-1 flex 500:flex-col items-center justify-around'>
      <Li svgs={svgs} />
    </div>
  )
}

export { Nav };
