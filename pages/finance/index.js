import Layout from "../../components/layout"
import SectionHeader from "../../components/molecules/sectionHeader"
import SectionTitle from "../../components/atoms/sectionTitle"
import FinanceCard from "../../components/molecules/financeCard"
import TransactionCard from "../../components/molecules/transactionCard"
import TransactionsTable from "../../components/organisms/transactionsTable"

export default function Finance () {
    const actions = {
        addPlan: {
            label: "Add Transaction",
            action: () => {
                alert("Hola")
            }
        }
    }
return (
    <Layout>
        <main>
            <SectionHeader title="Finance" actions={actions} />

            <div className="flex space-x-10">
                <div className="w-6/12">
                    <div className="px-5 mt-5">
                        <SectionTitle type="secondary">Summary</SectionTitle>
                    </div>
                    <div className="flex justify-between px-5 py-5 mt-5 bg-white border shadow-sm rounded-xl">
                        <div className="space-y-4">
                            <FinanceCard
                                className=""
                                title="Income"
                                value="60,000.00"
                                subtitle="Last Month: 0.0%"
                            />
                            <FinanceCard
                                title="Savings"
                                value="10,000,00"
                                subtitle="Total: 150,000.00"
                            />
                        </div>
                        <div className="px-5 py-5 text-white bg-pink-500 rounded-xl">
                            <h4> Expenses </h4>
                            <div className="mt-2 text-4xl font-bold"> 10,000 </div>
                            <div className="px-5 py-2 mt-4 bg-gray-700 bg-opacity-25 rounded-3xl"> Last month variance: 
                            <span className="font-bold">+10%</span></div>
                        </div>
                    </div>
                </div>
                <div className="w-6/12">
                <div className="px-5 mt-5">
                    <SectionTitle type="secondary">Subscriptions</SectionTitle>
                    <div className="mt-5 bg-white border rounded-lg shadow-md">
                        <TransactionCard title="Netflix" subtitle="Streaming service" status="PAID" value="1,000.00" markAsPaid={true} />
                    </div>
                </div>
                </div>
            </div>
            <div className="flex mt-5 space-x-10">
                <div className="w-6/12">
                    <div className="px-5 mt-5">
                        <SectionTitle type="secondary">My Payments</SectionTitle>
                    </div>
                    <div className="mt-5 bg-white border rounded-lg shadow-md">
                        <TransactionCard title="MCTekk" subtitle="Pago de nomina" status="PAID" value="60,000.00" markAsPaid={true} />
                        <TransactionCard title="MCTekk" subtitle="Pago de nomina" status="PAID" value="60,000.00" markAsPaid={true} />
                        <TransactionCard title="MCTekk" subtitle="Pago de nomina" status="PAID" value="60,000.00" markAsPaid={true} />
                    </div>
                </div>
                <div className="w-6/12">
                    <TransactionsTable />
                </div>
            </div>
        </main>
    </Layout>
)
}