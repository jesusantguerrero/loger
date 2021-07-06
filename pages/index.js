import Head from 'next/head';
import { useUser } from "@clerk/clerk-react";
import Layout from '../components/layout';
import Button from '../components/atoms/button';
import TransactionsTable from '../components/organisms/transactionsTable';
import BudgetTracker from '../components/organisms/budgetTracker';

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
        <div className="flex space-x-10">
          <div className="w-9/12">
            <BudgetTracker />
            <TransactionsTable username={firstName} />
          </div>
          <div className="w-3/12">
              <div className="space-y-5">
                  <div className="px-4 py-3 bg-white rounded-lg shadow-md">
                      <div className="flex justify-between">
                          <h4 className="text-2xl font-bold text-blue-700"> Get random meal</h4>
                          <Button> <i className="fa fa-sync" /></Button>
                      </div>
                      <div className="h-20">
                      </div>
                  </div>

                  <h4 className="text-2xl font-bold text-pink-500"> Menu for today</h4>
                  <div className="px-4 py-3 bg-white rounded-lg shadow-md cursor-pointer">
                      <h4 className="font-bold text-blue-700">
                          {/* { plan.dateable.name } */}
                      </h4>
                      <small className="text-gray-400">Lunch</small>
                  </div>
              </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
