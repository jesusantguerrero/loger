import SectionTitle from "../atoms/sectionTitle";
import Button from "../atoms/button";

export default function SectionHeader({ title, actions }) {
return (
<header className="border flex justify-between py-4 bg-white shadow-sm rounded-2xl px-5 mt-2">
    <SectionTitle>{title}</SectionTitle>
    <div test-id="actions" className="actions space-x-2">
        {actions && Object.values(actions).map((action, actionName) => (
        <Button
            key={actionName}
            onClick={action.action}
        >
            {action.label}
        </Button>
        ))}
    </div>
</header>)
}