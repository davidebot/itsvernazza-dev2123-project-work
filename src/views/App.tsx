import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import RouteEnum from "../constants/RouteEnum";
import AtmPrelievoPage from "./atm-simulato/AtmPrelievoPage";
import AtmSceltaOperazionePage from "./atm-simulato/AtmSceltaOperazionePage";
import AtmVersamentoPage from "./atm-simulato/AtmVersamentoPage";
import GestionePage from "./gestione/GestionePage";
import ListaMovimenti from "./movimenti/elencoMovimenti/ListaMovimenti";
import FormInserimentoMovimento from "./movimenti/formInserimento/FormInserimentoMovimento";
import ElencoContatti from "./rubrica/ElencoContatti/ElencoContatti";
import FormInserimentoContatto from "./rubrica/formInserimentoContatto/FormInserimentoContatto";
import Template from "./Template";
import GestioneProfiloPage from "./user/GestioneProfiloPage";
import UserLoginPage from "./user/UserLoginPage";

const App: React.FC = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Template />}>
                    <Route path="/" element={<Navigate to={RouteEnum.Login} replace={true} />} />
                    <Route path={RouteEnum.Login} element={<UserLoginPage />} />
                    <Route path={RouteEnum.Rubrica} element={<ElencoContatti />} />
                    <Route path={RouteEnum.Movimenti} element={<ListaMovimenti />} />
                    <Route path={RouteEnum.InserimentoBonifico} element={<FormInserimentoMovimento />} />
                    <Route path={RouteEnum.InserimentoContatto} element={<FormInserimentoContatto />} />
                    <Route path={RouteEnum.AtmSimulato} element={<AtmSceltaOperazionePage />} />
                    <Route path={RouteEnum.Prelievo} element={<AtmPrelievoPage />} />
                    <Route path={RouteEnum.Versamento} element={<AtmVersamentoPage />} />
                    <Route path={RouteEnum.Gestione} element={<GestionePage />} />
                    <Route path={RouteEnum.Profilo} element={<GestioneProfiloPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
