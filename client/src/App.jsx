import { Route, Routes } from "react-router";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import { Catalog } from "./components/catalog/Catalog";
import { About } from "./components/about/About";
import { Login } from "./components/login/Login";
import { Register } from "./components/register/Register";
import { CreateItem } from "./components/create-item/CreateItem";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:category" element={<Catalog />} />
        <Route path="/about" element={<About />} />
        <Route path="/user">
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/furniture">
          <Route path="create" element={<CreateItem />} />
        </Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
