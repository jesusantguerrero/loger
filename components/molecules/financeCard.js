export default function FinanceCard ({ value, title, subtitle, className }) {
    const classes = 'flex bg-gray-100 items-center rounded-md px-5 py-4' + className

    return ( 
    <div className={classes}>
        <div className="text-blue-700 font-bold text-xl">{value}</div>
        <div className="ml-5 text-gray-600">
            <p className="font-bold">{title}</p>
            <span>{subtitle}</span>
        </div>
    </div>)
}