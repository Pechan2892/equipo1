import { NavBar } from "./pages/navbar/NavBar";
import { Register } from "./pages/register/Register";
import { TokenProvider } from "./context/TokenContext";
import { Bootcamps } from "./pages/bootcamps/Bootcamps";
import { HomeContent } from "./pages/homecontent/HomeContent";
import { Login } from "./pages/login/Login";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Footer from "./pages/footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <TokenProvider>
          <header className="headerContent ">
            {" "}
            {/* Contiene el navbar */}
            <NavBar />
          </header>
          <main className="mainContent container mt-2">
            {" "}
            {/* Contendrá las distintas vistas */}
            <Routes>
              <Route path="/" element={<HomeContent />} />{" "}
              {/* Direccionaría a la landing */}
              <Route path="/bootcapms" element={<Bootcamps />} />{" "}
              {/* Direccionaría a los bootcamps con la petición a la API(pendiente) */}
              <Route path="/register" element={<Register />} />{" "}
              {/* Direcciona al form de registro(completado) */}
              <Route path="/login" element={<Login />} />
              {/* Direcciona al form de login (completado) */}
            </Routes>
          </main>
          <footer className="footerContent">
            <Footer />
          </footer>
        </TokenProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
