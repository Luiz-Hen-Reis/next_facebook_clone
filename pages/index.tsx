import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { GetServerSideProps } from 'next'
import { Session } from 'next-auth'
import { getSession } from 'next-auth/react'
import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Login from '../components/Login'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'
import { firestore } from '../firebase'
import { PostType } from '../types/PostType'

type Props = {
  session: Session;
  posts: PostType[]
}

export default function Home({ session, posts }: Props) {
  
  if (!session) return <Login />

  return (
    <div>
      <Head>
        <title>Facebook</title>
      </Head>

        <Header />
        
      <main className='flex'>
        <Sidebar />
        <Feed posts={posts} />
        <Widgets/>
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  const q = query(collection(firestore, `posts`), orderBy('timestamp', 'desc'))
  const posts = await getDocs(q);
  const docs: PostType[] = posts.docs.map((post) => ({
    id: post.id,
   name: post.data().name,
   email: post.data().email,
   image: post.data().image,
   message: post.data().message,
   timestamp: null,
   postUrl: post.data().postUrl,
  }))

  return {
    props: {
      session,
      posts: docs,
    }
  }
}
