import { Link } from "react-router-dom"

const App = () => {
  return (
    <>
    <h1 className="text-3xl font-bold underline text-red-500">Hello World</h1>
    <Link className="text-blue-500 hover:text-blue-600" to="/catalog">Catalog</Link>
    </>
  )
}

export default App
