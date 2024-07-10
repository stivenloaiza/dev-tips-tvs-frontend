import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/nofound" component={NoFoundPage} />
            <Route path="/suscription-check" component={SuscriptionCheck} />
            <Route path="/suscriptions" component={Suscriptions} />
            <Route path="/tips" component={Tips} />
            <Route path="/verify-code" component={VerifyCode} />
            <Route path="/verify-email" component={VerifyEmail} />
            <Route component={NoFoundPage} /> {/* Ruta para manejar 404 */}
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
