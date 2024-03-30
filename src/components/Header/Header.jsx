import { Head } from './Head';
import { Logo } from './Logo';
import { Nav } from './Nav';
import { Post } from './Post';
import { Profile } from './Profile';

const Header = ({ scroll }) => {
  let className = 'w-full 500:w-auto h-[52.5px] 500:h-auto fixed 500:static bottom-0 z-10 500:flex flex-col items-end border-t border-very-dark-gray 500:border-none bg-black transition-opacity 500:transition-none duration-500';
  if (scroll) {
    className += ' opacity-40'
  }

  return (
    <header className='500:grow 500:shrink-0'>
      <Head scroll={scroll} />
      <section className={className}>
        <div className='500:w-[68px] 600:w-[88px] 988:w-[68px] 1008:w-[88px] h-full 500:h-auto'>
          <nav className='h-full 500:fixed top-0'>
            <ul className='500:w-[68px] 600:w-[88px] 988:w-[68px] 1008:w-[88px] h-full list-none 500:px-1 600:px-2 988:px-1 1008:px-2 500:overflow-y-auto 500:flex flex-col justify-between'>
              <section className='h-full 500:h-auto 500:flex flex-col items-center'>
                <Logo />
                <Nav />
                <Post />
              </section>
              <section className='hidden 500:flex justify-center 500:my-3 500:py-3'>
                <Profile />
              </section>
            </ul>
          </nav>
        </div>
      </section>
    </header>
  )
}

export { Header };
