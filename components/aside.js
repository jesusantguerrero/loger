import Link from "next/link"
import Image from "next/image"

export const Aside = ({ menu }) => {
  return (<aside className="w-52">
    <ul className="mt-5 space-y-2"> { menu.map((menuItem => (
      <li key={menuItem.label}><Link href={menuItem.to} className="w-full">
        <a className="hover:text-pink-500 border-l-4 font-bold border-transparent text-gray-600 hover:border-pink-500 inline-block transition-colors px-4 py-2  w-full">
          {menuItem.icon}
          {menuItem.label}
        </a></Link>
      </li>
    )))}
    </ul>
  </aside>)
}