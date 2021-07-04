import Head from 'next/head'
import { useUser } from "@clerk/clerk-react";
import Layout from '../components/layout';

export default function Home() {
  const { firstName } = useUser()

  return (
    <div>
      <Head>
        <title>Loger</title>
        <meta name="description" content="Family Management App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
          <h1>
            Welcome to <a href="https://nextjs.org">Loger {firstName}</a>
          </h1>
      </Layout>
    </div>
  )
}
