import Layout from "../../components/layout"
import SectionHeader from "../../components/molecules/sectionHeader"

export default function Meals () {
    const actions = {
        addMeal: {
            label: "Add Meal",
            action: () => {
                alert("Hola")
            }
        }
    }
return (
    <Layout>
        <main>
            <SectionHeader title="Meals" actions={actions} />
        </main>
    </Layout>
)
}