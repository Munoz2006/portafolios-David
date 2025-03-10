import { Header } from "./layout/Header/Header"
import { Home } from "./pages/Home/Home"
import { Routes, Route } from "react-router-dom"
export const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </>
  )
}

