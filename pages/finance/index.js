import Layout from "../../components/layout"
import SectionHeader from "../../components/molecules/sectionHeader"

export default function Finance () {
    const actions = {
        addPlan: {
            label: "Add Transaction",
            action: () => {
                alert("Hola")
            }
        }
    }
return (
    <Layout>
        <main>
            <SectionHeader title="Finance" actions={actions} />
        </main>
    </Layout>
)
}