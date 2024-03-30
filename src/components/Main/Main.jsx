import { Head } from './Head';
import { NewPost } from './NewPost';
import { Content } from './Content';
import { Aside } from './Aside/Aside';

const Main = () => {
  return (
    <main className='500:grow 688:grow-[2] 988:grow 500:w-full 688:w-auto mt-[105px] 500:mt-0'>
      <div className='500:w-full 688:w-[600px] 988:w-[920px] 1078:w-[990px] 1500:w-[1050px] 988:flex 988:items-stretch 988:justify-between'>
        <Content>
          <Head />
          <NewPost />
        </Content>
        <Aside />
      </div>
    </main>
  )
}

export { Main };
