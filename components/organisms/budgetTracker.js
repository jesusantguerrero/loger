import SectionTitle from "../atoms/sectionTitle";
import Button from "../atoms/button";

export default function BudgetTracker({children, username, onSectionClick }) {
    const sections = {
        expenses: {
            label: 'Current Expenses',
            value: '15,000.00'
        },
        budget: {
            label: 'Monthly Budget',
            value: '30,000.00'
        }
    };

    return (<div className="px-5">
    <div className="px-5 py-3 transition bg-white border divide-y rounded-lg shadow-md">
        <div className="flex justify-between pb-2">
            <h1 className="font-bold text-gray-500">
                Welcome to Loger <span className="text-pink-500">{username}</span>
            </h1>
            <Button> Edit budget </Button>
        </div>
        <div className="flex py-3">
            { Object.entries(sections).map(([sectionName, section]) => (
                <div className="w-full transition cursor-pointer hover:opacity-75" onClick={onSectionClick.bind(null, sectionName)} key={sectionName}>
                    <h4 className="text-gray-500">{section.label}</h4>
                    <SectionTitle>{section.value}</SectionTitle>
                </div>
            ))}
        </div>
        { children }
    </div>
  </div>)
}