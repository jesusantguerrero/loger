import Layout from "../../components/layout"
import SectionHeader from "../../components/molecules/sectionHeader"

export default function Planner () {
    const actions = {
        addPlan: {
            label: "Add Plan",
            action: () => {
                alert("Hola")
            }
        },
        groceryList: {
            label: 'Get Grocery List',
            action: () => {
                alert('Hola')
            }
        }
    }
return (
    <Layout>
        <main>
            <SectionHeader title="Planner" actions={actions} />
        </main>
    </Layout>
)
}