import Layout from "../../components/layout"

export default function Meals () {
return (
    <Layout>
        <main>
            <header className="border flex justify-between py-4 bg-white shadow-sm rounded-2xl px-5 mt-2">
                <h4 className="font-bold text-blue-700 text-lg">Meals</h4>
                <div test-id="actions" className="actions">
                    <button className="bg-pink-500 text-white px-5 py-1 rounded-lg hover:bg-opacity-75">Add meal</button>
                </div>
            </header>
        </main>
    </Layout>
)
}