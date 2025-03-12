import { Home } from "./pages/Home/Home"
import { Routes, Route } from "react-router-dom"
import { Header } from "./layout/Header/Header"
import {Footer} from "./layout/Footer/Footer"
export const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

