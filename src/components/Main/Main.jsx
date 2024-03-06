import { Head } from './Head';
import { NewPost } from './NewPost';
import { Content } from './Content';
import { Aside } from './Aside';

const Main = () => {
  return (
    <main className='500:grow 688:grow-[2] 500:w-full 688:w-auto mt-[105px] 500:mt-0'>
      <div className='500:w-full 688:w-[600px]'>
        <Head />
        <NewPost />
        <Content />
        <Aside />
      </div>
    </main>
  )
}

export { Main };
