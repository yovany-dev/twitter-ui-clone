import { Head } from './Head';
import { NewPost } from './NewPost';
import { Content } from './Content';
import { Aside } from './Aside';

const Main = () => {
  return (
    <main className='500:grow 500:w-full mt-[105px] 500:mt-0'>
      <div className='500:w-full'>
        <Head />
        <NewPost />
        <Content />
        <Aside />
      </div>
    </main>
  )
}

export { Main };
