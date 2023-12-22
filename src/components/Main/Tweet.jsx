import React from 'react';

function Tweet() {
  return (
    <article className='py-3 px-4 flex gap-2 t-text-m text-primary-white border-b border-very-dark-gray'>
      <section className='w-10 h-10 t-rounded overflow-hidden'>
        <img className='w-full h-full' src="https://pbs.twimg.com/profile_images/1613612257015128065/oA0Is67J_x96.jpg" alt="avatar user" />
      </section>
      <section className='flex-1 overflow-hidden'>
        <header className='flex items-center gap-2'>
          <section className='flex-1 flex gap-1 overflow-hidden'>
            <div className='flex items-center gap-0.5 overflow-hidden'>
              <h2 className='flex-1 whitespace-nowrap overflow-hidden font-bold tracking-tight'>Miguel Angel Duran</h2>
              <svg viewBox="0 0 22 22" className='h-[18px] fill-twitter'><g><path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path></g></svg>
            </div>
            <div className='flex items-center gap-1 overflow-hidden'>
              <h2 className='flex-1 whitespace-nowrap overflow-hidden text-dark-gray'>@midudev</h2>
              <div className='flex items-center gap-1'>
                <div className='w-0.5 h-0.5 bg-dark-gray rounded-full'></div>
                <p className='tracking-tight text-dark-gray'>Dec 18</p>
              </div>
            </div>
          </section>
          <section>
            <svg viewBox="0 0 24 24" className='t-icon'><g><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></g></svg>
          </section>
        </header>
        <section className='mt-0.5 flex flex-col gap-3'>
          <p className='leading-5 font-normal'>¡ADOBE NO comprará FIGMA finalmente! La compra estaba valorada en 20 mil millones de $. <br /><br /> Figma era uno de los mayores competidores de Adobe. Y tanto UK como la EU no veían clara la compra. <br /><br /> Uno de los noticiones del mundo de UX y... <br />
            <a href="/" class="text-blue-500 hover:text-blue-700">Show more</a>
          </p>
          <div className='rounded-2xl overflow-hidden relative border border-very-dark-gray'>
            <img src="https://pbs.twimg.com/media/GBoiszDXQAAbi0F?format=jpg&amp;name=small" alt="Adobe, como un Pacman, comiendose el logo de Figma."></img>
            <div className='h-5 px-1 rounded absolute left-3 bottom-3 font-bold text-[13px] bg-[#0000004d]'>ALT</div>
          </div>
        </section>
        <footer className='max-w-[600px] mt-3 flex justify-between text-[13px] text-dark-gray'>
          <div className='t-tweet-footer'>
            <svg viewBox="0 0 24 24" className='t-icon'><g><path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path></g></svg>
            <p>28</p>
          </div>
          <div className='t-tweet-footer'>
            <svg viewBox="0 0 24 24" className='t-icon'><g><path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path></g></svg>
            <p>115</p>
          </div>
          <div className='t-tweet-footer'>
            <svg viewBox="0 0 24 24" className='t-icon'><g><path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path></g></svg>
            <p>758</p>
          </div>
          <div className='t-tweet-footer'>
            <svg viewBox="0 0 24 24" className='t-icon'><g><path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path></g></svg>
            <p>92k</p>
          </div>
          <div className='t-tweet-footer'>
            <svg viewBox="0 0 24 24" className='t-icon'><g><path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path></g></svg>
          </div>
          <div className='t-tweet-footer'>
            <svg viewBox="0 0 24 24" className='t-icon'><g><path d="M17 4c-1.1 0-2 .9-2 2 0 .33.08.65.22.92C15.56 7.56 16.23 8 17 8c1.1 0 2-.9 2-2s-.9-2-2-2zm-4 2c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4c-1.17 0-2.22-.5-2.95-1.3l-4.16 2.37c.07.3.11.61.11.93s-.04.63-.11.93l4.16 2.37c.73-.8 1.78-1.3 2.95-1.3 2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4c0-.32.04-.63.11-.93L8.95 14.7C8.22 15.5 7.17 16 6 16c-2.21 0-4-1.79-4-4s1.79-4 4-4c1.17 0 2.22.5 2.95 1.3l4.16-2.37c-.07-.3-.11-.61-.11-.93zm-7 4c-1.1 0-2 .9-2 2s.9 2 2 2c.77 0 1.44-.44 1.78-1.08.14-.27.22-.59.22-.92s-.08-.65-.22-.92C7.44 10.44 6.77 10 6 10zm11 6c-.77 0-1.44.44-1.78 1.08-.14.27-.22.59-.22.92 0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2z"></path></g></svg>
          </div>
        </footer>
      </section>
    </article>
  )
}

export { Tweet };
