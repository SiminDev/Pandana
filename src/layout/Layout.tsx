import Navbar from "../components/Navbar"

interface Props {
    children : React.ReactNode
}

function Layout({children}:Props) {
  return (
    <>
    <Navbar />
    {children}</>
  )
}

export default Layout