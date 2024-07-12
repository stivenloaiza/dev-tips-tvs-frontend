import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import NoFoundPage from "./pages/NoFoundPage.jsx";
import SuscriptionCheck from "./pages/SuscriptionCheck.jsx";
import Suscriptions from "./pages/Suscriptions.jsx";
import Tips from "./pages/Tips.jsx";
import VerifyCode from "./pages/VerifyCode.jsx";
import VerifyEmail from "./pages/VerifyEmail.jsx";
import "./index.css"; // Asegúrate de importar el archivo CSS global

function App() {
  return (
    <div className="bg-custom-bg bg-cover bg-center min-h-screen text-white">
      <Router>
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nofound" element={<NoFoundPage />} />
            <Route path="/suscription-check" element={<SuscriptionCheck />} />
            <Route path="/suscriptions" element={<Suscriptions />} />
            <Route path="/tips" element={<Tips />} />
            <Route path="/verify-code" element={<VerifyCode />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
            <Route path="*" element={<NoFoundPage />} /> {/* Ruta para manejar 404 */}
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
