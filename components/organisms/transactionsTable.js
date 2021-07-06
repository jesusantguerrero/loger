import TransactionCard from "../molecules/transactionCard";
import SectionTitle from "../atoms/sectionTitle";

export default function TransactionsTable() {
    return (
        <div className="px-5 mt-5">
            <SectionTitle type="secondary">Transactions</SectionTitle>
            <div className="mt-5 bg-white border rounded-lg shadow-md">
                <TransactionCard title="MCTekk" subtitle="Pago de nomina" status="PAID" value="60,000.00" />
                <TransactionCard title="MCTekk" subtitle="Pago de nomina" status="PAID" value="60,000.00" />
                <TransactionCard title="MCTekk" subtitle="Pago de nomina" status="PAID" value="60,000.00" />
            </div>
        </div>
    )
}