import TransactionCard from "../molecules/transactionCard";
import SectionTitle from "../atoms/sectionTitle";

export default function TransactionsTable({ tableClass, className, label }) {
    const classes = className || 'px-5 mt-5';
    const tableClasses = tableClass || 'mt-5 bg-white border rounded-lg shadow-md';
    const tableLabel = label || 'Transactions'
    return (
        <div className={classes}>
            <SectionTitle type="secondary">{tableLabel}</SectionTitle>
            <div className={tableClasses}>
                <TransactionCard title="MCTekk" subtitle="Pago de nomina" status="PAID" value="60,000.00" />
                <TransactionCard title="MCTekk" subtitle="Pago de nomina" status="PAID" value="60,000.00" />
                <TransactionCard title="MCTekk" subtitle="Pago de nomina" status="PAID" value="60,000.00" />
            </div>
        </div>
    )
}