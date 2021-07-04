import { Header } from "./header";
import { Aside } from "./aside";

export default function Layout({ children }) {
    const menu = [{
        label: 'Home',
        to: '/'
      }, {
          label: 'Meal Planer',
          to: '/meals/planner'
        }, {
        label: 'Meals',
        to: '/meals'
      }, {
          label: 'Finance',
          to: '/'
      }]

    return (
        <main>
            <Header></Header>
            <div className="flex px-5">
                <Aside menu={menu} />
                <main className="bg-white rounded-md w-full col-auto min-h-screen p-5">
                    {children}
                </main>
            </div>
        </main>
    )
}