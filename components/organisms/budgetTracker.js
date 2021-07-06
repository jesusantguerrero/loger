import SectionTitle from "../atoms/sectionTitle";
import Button from "../atoms/button";

export default function BudgetTracker({ username }) {
    return (<div className="px-5">
    <div className="px-5 py-3 bg-white border divide-y rounded-lg shadow-md">
        <div className="flex justify-between pb-2">
            <h1 className="font-bold text-gray-500">
                Welcome to Loger <span className="text-pink-500">{username}</span>
            </h1>
            <Button> Edit budget </Button>
        </div>
      <div className="flex py-3">
          <div className="w-full">
            <h4 className="text-gray-500">Current expenses</h4>
            <SectionTitle>15,000.00</SectionTitle>
          </div>
          <div className="w-full">
            <h4 className="text-gray-500">Monthly Budget</h4>
            <SectionTitle>30,000.00</SectionTitle>
          </div>
      </div>
    </div>
  </div>)
}