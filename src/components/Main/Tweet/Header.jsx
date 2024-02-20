import { SVG } from "../../SVG";

const Header = ({ name, username, date }) => {
  return (
    <header className='flex items-center gap-2'>
      <section className='flex-1 flex gap-1 overflow-hidden'>
        <div className='flex items-center gap-0.5 overflow-hidden'>
          <h2 className='flex-1 whitespace-nowrap overflow-hidden font-bold tracking-tight'>{name}</h2>
          <SVG name={'Verified'} h="18px" color="#1d9cf0" />
        </div>
        <div className='flex items-center gap-1 overflow-hidden text-dark-gray'>
          <h2 className='flex-1 whitespace-nowrap overflow-hidden'>@{username}</h2>
          <div className='flex items-center gap-1'>
            <div className='w-0.5 h-0.5 bg-dark-gray rounded-full'></div>
            <p className='tracking-tight'>{date}</p>
          </div>
        </div>
      </section>
      <section>
        <SVG name={'ThreePoints'} w="20px" color="#71767b" />
      </section>
    </header>
  )
}

export { Header };
