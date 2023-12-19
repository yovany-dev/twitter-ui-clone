import React from 'react';

function Tweet() {
  return (
    <div className='py-2 px-4 flex gap-2 t-text-m text-primary-white border-b border-very-dark-gray'>
      <div className='w-10 h-10 t-rounded overflow-hidden'>
        <img className='w-full h-full' src="https://pbs.twimg.com/profile_images/1613612257015128065/oA0Is67J_x96.jpg" alt="avatar user" />
      </div>
      <div className='flex-1 overflow-hidden'>
        <div className='flex items-center gap-2'>
          <div className='flex-1 flex gap-1 overflow-hidden'>
            <div className='flex items-center gap-0.5 overflow-hidden'>
              <span className='flex-1 whitespace-nowrap overflow-hidden font-bold tracking-tight'>Miguel Angel Duran</span>
              <svg viewBox="0 0 22 22" className='h-[18px] fill-twitter'><g><path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path></g></svg>
            </div>
            <div className='flex items-center gap-1 overflow-hidden'>
              <span className='flex-1 whitespace-nowrap overflow-hidden text-dark-gray'>@midudev</span>
              <div className='flex items-center gap-1'>
                <div className='w-0.5 h-0.5 bg-dark-gray rounded-full'></div>
                <span className='tracking-tight text-dark-gray'>Dec 18</span>
              </div>
            </div>
          </div>
          <div>
            <svg viewBox="0 0 24 24" className='w-5 h-5 fill-dark-gray'><g><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></g></svg>
          </div>
        </div>
        <div className=''>Content</div>
        <div className=''>Options</div>
      </div>
    </div>
  )
}

export { Tweet };
