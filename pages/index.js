import Head from 'next/head'
import { useUser } from "@clerk/clerk-react";
import { Header } from '../components/header';
import { Aside } from '../components/aside';

export default function Home() {
  const { firstName } = useUser()
  const menu = [{
    label: 'Home',
    to: '/'
  }, {
      label: 'Meal Planer',
      to: '/'
    }, {
    label: 'Meals',
    to: '/'
  }, {
      label: 'Finance',
      to: '/'
  }]

  return (
    <div>
      <Head>
        <title>Loger</title>
        <meta name="description" content="Family Management App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <div className="flex px-5">
        <Aside menu={menu} />
        <main className="bg-white rounded-md w-full col-auto min-h-screen p-5">
          <h1>
            Welcome to <a href="https://nextjs.org">Loger {firstName}</a>
          </h1>
        </main>
      </div>
    </div>
  )
}
