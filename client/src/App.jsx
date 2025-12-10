import { Route, Routes } from "react-router";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import { Catalog } from "./components/catalog/Catalog";
import { About } from "./components/about/About";
import { Login } from "./components/login/Login";
import { Register } from "./components/register/Register";
import { CreateItem } from "./components/create-item/CreateItem";
import { FurnitureDetails } from "./components/furniture-details/FurnitureDetails";
import { UserProvider } from "./components/user-provider/UserProvider";
import { Logout } from "./components/logout/Logout";
import { ProtectedRoute } from "./components/protected-route/ProtectedRoute";
import { FurnitureEdit } from "./components/furniture-edit/FurnitureEdit";
import { FurnitureDelete } from "./components/furniture-delete/FurnitureDelete";
import { FurnitureLike } from "./components/furniture-lie/FurnitureLike";

function App() {

  return (
    <UserProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:category" element={<Catalog />} />
        <Route path="/catalog/details/:id" element={<FurnitureDetails />} />
        <Route path="/catalog/edit/:id" element={<FurnitureEdit />} />
        <Route path="/catalog/delete/:id" element={<FurnitureDelete />} />
        <Route path="/catalog/like/:id" element={<FurnitureLike />} />
        <Route path="/about" element={<About />} />
        <Route path="/user">
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="logout" element={
            <ProtectedRoute>
              <Logout />
            </ProtectedRoute>
            } />
        </Route>
        <Route path="/furniture">
          <Route path="create" element={
            <ProtectedRoute>
              <CreateItem />
            </ProtectedRoute>
            } />
        </Route>
      </Routes>
      <Footer />
    </UserProvider>
  )
}

export default App
