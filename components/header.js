import { UserButton } from "@clerk/clerk-react"
export const Header = () => {
    return (<header className="flex justify-between w-full px-5 py-2">
    <h1 className="font-bold font-sans text-4xl text-pink-500">Logger</h1>
    <UserButton />
  </header>)
}