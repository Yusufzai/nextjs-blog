import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layouts'
import firstPost from './scss/first-post.module.scss'
// import '../../styles/main.scss'
export default function FirstPost() {
  return (
    <>
    <Layout>
        <Head>
            <title>First Post</title>
        </Head>
        <h1 className={firstPost.title}>First Post</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
    </Layout>
    </>
  )
}