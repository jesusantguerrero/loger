export default function TransactionCard({ title, subtitle, value, status, markAsPaid }) {
    return (<div className="py-2 px-5 flex justify-between">
    <div className="flex space-x-3">
        <div className="bg-gray-50 px-5 py-3 w-20 rounded-md font-bold text-center">
            MC
        </div>
        <div>
            <h4 className="font-bold"> {title}</h4>
            <small className="text-sm"> {subtitle}</small>
        </div>

    </div>
    <div className="flex space-x-5">
        <div>
            <h4 className="font-bold"> {value}</h4>
            <small className="text-sm"> { status }</small>
        </div>
        {markAsPaid && <div>
            Mark as Paid
        </div>}
    </div>
</div>
)
}