import { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from './routes';
import AutenticacaoProvider, { AutenticacaoContext } from './context/autenticacao';


function App() {


  return (

    <BrowserRouter>
      <AutenticacaoProvider>

        <AppRoutes />
      </AutenticacaoProvider>

    </BrowserRouter>

  )
}

export default App
