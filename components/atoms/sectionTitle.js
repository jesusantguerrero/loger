export default function SectionTitle({ children, type }) {
    const textColor = () => {
        const types = {
            'default': 'text-blue-700',
            'primary': 'text-pink-700',
            'secondary': 'text-gray-400',
        }
        return types[type] || types.default;
    }
    return (<h4 className={`text-lg font-bold ${textColor()}`}>{children}</h4>)
} 